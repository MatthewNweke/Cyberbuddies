import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useState } from 'react';
import { SyncLoader } from 'react-spinners';
import Swal from 'sweetalert2';
// import TimeTableFetch from '../../timeTableFetch';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const CreateTimeTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [starts, setStartDate] = useState('');
  const [ends, setEndDate] = useState('');
  const [course, setCourse] = useState('');
  const [day, setDay] = useState('');
  const [loading, setLoading] = useState(false);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const userInfo = {
      course,
      starts,
      ends,
      day,
    };
    console.log(userInfo);

    const accessToken = localStorage.getItem('access_token');
    const username = localStorage.getItem('Username');
    const password = localStorage.getItem('Password');
    if (!accessToken) {
      console.error('Access token not found.');
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
        'https://api.nanocodes.com.ng/timetable/create',
        userInfo,
        config
      );
      console.log(response.data);
      Swal.fire({
        icon: 'success',
        title: ' successful',
        text: 'You have successfully added course to the Table.',
      });
      setLoading(false);
      // Handle the response from the API
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: ' failed',
        text: 'There was an error Adding course to the Table . Please try again.',
      });
      setLoading(false);
      // Handle the error
    }
    setOpen(false);
  };

  const bg = 'linear-gradient(93.62deg, #031FFF 6.13%, #D9745F 73.02%)';
  return (
    <div className="text-white border-[1px] p-[1rem] w-[200px] rounded-md flex flex-col items-center justify-center my-[1rem]">
      <h1 className="mb-[0.5rem] text-sm font-semibold"> Add course</h1>
      <button
        style={{ background: bg }}
        onClick={handleOpen}
        className="md:px-[1.5rem] md:py-[0.3rem] px-[1rem] py-[0.1rem] rounded-md"
      >
        To TimeTable
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add course to time table
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="my-[1rem]">
              <TextField
                label="Course "
                type="text"
                sx={{ width: '100%' }}
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </div>
            <TextField
              label="Start "
              type="time"
              sx={{ width: '100%' }}
              value={starts}
              onChange={handleStartDateChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />

            <div className="my-[1rem]">
              <TextField
                label="End "
                type="time"
                sx={{ width: '100%' }}
                value={ends}
                onChange={handleEndDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </div>
            <div className="my-[1rem]">
              <TextField
                label="Day "
                type="text"
                sx={{ width: '100%' }}
                value={day}
                onChange={(e) => setDay(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </div>

            <Button type="submit" variant="contained" color="primary">
              {loading ? <SyncLoader color="#ffffff" /> : 'Add'}
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateTimeTable;
