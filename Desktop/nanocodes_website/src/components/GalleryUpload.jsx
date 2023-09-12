import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { SyncLoader } from "react-spinners";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const bg = "linear-gradient(93.62deg, #031FFF 6.13%, #D9745F 73.02%)";
export default function GalleryUpload() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [loading, setLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const accessToken = localStorage.getItem("access_token");
      const username = localStorage.getItem("Username");
      const password = localStorage.getItem("Password");
      console.log(accessToken);

      try {
        const response = await fetch(
          "https://api.nanocodes.com.ng/notifications/",
          {
            headers: {
              Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch notifications");
        }

        const data = await response.json();
        setNotifications(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotifications();
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(selectedFile);
    if (!selectedFile || !title || !about) {
      setLoading(false);
      return;
    }
    
    const userInfo = {
      selectedFile,
      title,
      about,
    };
    console.log(userInfo);
    const accessToken = localStorage.getItem("access_token");
    const username = localStorage.getItem("Username");
    const password = localStorage.getItem("Password");
    if (!accessToken) {
      console.error("Access token not found.");
      // Handle the absence of the access token, e.g., redirect to login page
      return;
    }

    const config = {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        // "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        "https://api.nanocodes.com.ng/gallery/create/",
        userInfo,
        config
      );
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "Upload successful",
        text: "Your image has been uploaded.",
      });
      setLoading(false);
      // Handle the response from the API
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Upload failed",
        text: "There was an error uploading to your gallery . Please try again.",
      });
      setLoading(false);
      // Handle the error
    }
    setOpen(false);
  };

  return (
    <div>
      <button
        style={{ background: bg }}
        className="md:px-[1.5rem] md:py-[0.3rem] px-[1rem] py-[0.1rem] rounded-md"
        onClick={handleOpen}
      >
        Upload
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="" onSubmit={handleUpload}>
            <TextField
              id="outlined-multiline-flexible"
              label="Title"
              multiline
              name="title"
              sx={{ width: "100%", marginBottom: "1rem" }}
              maxRows={4}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex items-center mb-[1rem]">
              <label
                htmlFor="file-input"
                className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Select File
              </label>
              <input
                id="file-input"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              {selectedFile && (
                <span className="ml-2">{selectedFile.name}</span>
              )}
            </div>
            <textarea
              name="description"
              onChange={(e) => setAbout(e.target.value)}
              className="w-full border-[grey] border-[1px] p-[1rem]"
              rows="5"
            ></textarea>
            <div className="flex items-center justify-center">
              <button
                className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                {loading ? (  <SyncLoader color="#ffffff"   />) : "Upload"}
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
