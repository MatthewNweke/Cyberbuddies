import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import PaystackPop from "@paystack/inline-js";
import axios from "axios";

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

const Paystack = ({ price,course }) => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    
    const accessToken = localStorage.getItem("access_token");
    const username = localStorage.getItem("Username");
    const password = localStorage.getItem("Password");


    const userInfo = {
      course_title:course,
      email:username,
      
    };
    console.log(userInfo);
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
      const response = await  axios.post(
        "https://api.nanocodes.com.ng/payment/",
        userInfo,
        config
      );
      console.log(response.data);
      // Handle the response from the API
    } catch (error) {
      console.error(error);
     
     
      // Handle the error
    }
    setOpen(false);
  };

  const payWithPayStack = (e) => {
    e.preventDefault();
    const paystact = new PaystackPop();
    paystact.newTransaction({
      key: "pk_live_f5a6b1ce471ecb736017befd7adb2473f537ee23",
      amount: price * 100,
      email,
      name,

      
      onSuccess(transaction) {
        handleSubmit()
        let message = `payment complete! Reference ${transaction.reference}`;
        alert(message);
        setEmail(" ");
        setName(" ");
      },
      onCancel() {
        alert("you have cancelled this transaction");
      },
      handleSubmit
    });
  };
  return (
    <div>
      <button
        onClick={handleOpen}
        className="my-[1rem] px-[3rem] rounded-lg py-[0.5rem] bg-gradient-to-br from-blue-600 to-red-500"
      >
        Get Started
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form action="" onSubmit={payWithPayStack}>
          <Box sx={style}>
            <div className="my-[1rem]">
              <TextField
                label="Name "
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                sx={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </div>
            <div className="my-[1rem]">
              <TextField
                label="Email "
                type="text"
                onChange={(e) => setEmail(e.target.value.trim())}
                value={email}
                sx={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </div>
            <div className="my-[1rem]">
              <TextField
                label="Amount "
                type="text"
                sx={{ width: "100%" }}
                value={price}
                disabled
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </div>
            <Button type="submit" variant="contained" color="primary">
              {/* //{loading ? (  <SyncLoader color="#ffffff"   />) : "Add"} */}
              Pay &#8358;{price}
            </Button>
          </Box>
        </form>
      </Modal>
    </div>
  );
};

export default Paystack;
