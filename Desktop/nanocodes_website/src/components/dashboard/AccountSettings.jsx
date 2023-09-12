import CameraAltIcon from '@mui/icons-material/CameraAlt';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';
import Swal from 'sweetalert2';
import { API_URL } from '../../constants/api';
import threeimg from '../../images/keyboard.png';
import DashbaordLayout from './DashbaordLayout';

const AccountSettingsPage = () => {
  const [getProfile, setGetProfile] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNotifications = async () => {
    const username = localStorage.getItem('Username');
    const password = localStorage.getItem('Password');

    try {
      const response = await fetch(`${API_URL}/profile/`, {
        headers: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }

      const data = await response.json();
      setGetProfile(data);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchNotifications();
  }, []);
  const { first_name, last_name, email, image } = getProfile;

  const updateProfile = async (e) => {
    // console.log(getProfile);
    setLoading(true);
    e.preventDefault();

    const username = localStorage.getItem('Username');
    const password = localStorage.getItem('Password');

    const config = {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        // "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        `${API_URL}/profile/create`,
        getProfile,
        config
      );
      console.log(response.data);
      Swal.fire({
        icon: 'success',
        title: 'Upload successful',
        text: 'Your image has been uploaded.',
      });
      setLoading(false);
      // Handle the response from the API
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Upload failed',
        text: 'There was an error uploading to your gallery . Please try again.',
      });
      setLoading(false);
      // Handle the error
    }
  };

  return (
    <DashbaordLayout>
      <div className="container mx-auto w-[70%] m-auto ">
        <h1 className="text-2xl font-bold mb-4 text-white">Account Settings</h1>

        <div className="h-[200px] w-[200px] rounded-full border-[2px] m-auto relative">
          <img
            src={image === '/media/user.jpg' ? threeimg : image}
            alt=""
            onChange={(e) =>
              setGetProfile({ ...getProfile, image: e.target.file[0] })
            }
            className="w-full h-full object-fill rounded-full"
          />

          <label htmlFor="failed">
            <div className="absolute h-full w-full left-0 cursor-pointer border-[2px] top-0 z-20 rounded-full flex items-end p-[1rem] justify-center ">
              <CameraAltIcon />
            </div>
          </label>
        </div>
        <form className="text-white" onSubmit={updateProfile}>
          <input type="file" className="hidden" name="" id="failed" />
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              First name
            </label>
            <input
              type="text"
              id="name"
              value={first_name}
              onChange={(e) =>
                setGetProfile({ ...getProfile, first_name: e.target.value })
              }
              className="w-full px-3 text-black py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Last name
            </label>
            <input
              type="text"
              id="last name"
              value={last_name}
              onChange={(e) =>
                setGetProfile({ ...getProfile, last_name: e.target.value })
              }
              className="w-full px-3 text-black py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) =>
                setGetProfile({ ...getProfile, email: e.target.value })
              }
              className="w-full px-3 text-black py-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {loading ? <SyncLoader /> : 'Save Changes'}
          </button>
        </form>
      </div>
    </DashbaordLayout>
  );
};

export default AccountSettingsPage;
