import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import Layout from '../components/Layout';
import { API_URL } from '../constants/api';

const Registration = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      email,
      password1,
      password2,
      phone_number: phoneNumber,
      last_name: lastName,
      first_name: firstName,
    };
    localStorage.setItem('email', email);
    localStorage.setItem('password', password1);
    try {
      const response = await axios.post(`${API_URL}/users/register`, data);
      // Redirect to the dashboard
      toast.success('Successfully registered');
      setLoading(false);
      history('/login');
      console.log(response.data);
    } catch (error) {
      setLoading(false);
      //toast.error(error.response.data.non_field_errors[0])
      toast.error('something went wrong');
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        //console.error(error.response.data.non_field_errors[0]);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
      console.error(error.config);
    }
  };
  return (
    <Layout>
      <div className="min-h-[100vh] flex items-center flex-col text-white justify-center">
        <p className="font-bold text-3xl">Sign up</p>
        <form action="#" className="md:w-[40%] w-4/5" onSubmit={handleSubmit}>
          <aside className="flex gap-4">
            <div className="basis-[50%]">
              <label htmlFor="#">First Name </label> <br />
              <input
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstName}
                required
                className=" w-full p-2 rounded-md mb-2 outline-none maini"
              />
            </div>
            <div className="basis-[50%]">
              <label htmlFor="#">Last Name</label> <br />
              <input
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastName}
                required
                className=" w-full p-2 rounded-md mb-2 outline-none maini"
              />
            </div>
          </aside>
          <aside className="flex gap-4 my-[1rem]">
            <div className="basis-[50%]">
              <label htmlFor="#">Email </label> <br />
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required
                className=" w-full p-2 rounded-md mb-2 outline-none maini"
              />
            </div>
            <div className="basis-[50%]">
              <label htmlFor="#">Phone</label> <br />
              <input
                type="tel"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                value={phoneNumber}
                required
                className=" w-full p-2 rounded-md mb-2 outline-none maini"
              />
            </div>
          </aside>
          <aside className="flex gap-4">
            <div className="basis-[50%]">
              <label htmlFor="#">Password </label> <br />
              <input
                type="password"
                onChange={(e) => {
                  setPassword1(e.target.value);
                }}
                value={password1}
                required
                className=" w-full p-2 rounded-md mb-2 outline-none maini"
              />
            </div>
            <div className="basis-[50%]">
              <label htmlFor="#"> Confirm password</label> <br />
              <input
                type="password"
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
                value={password2}
                required
                className=" w-full p-2 rounded-md mb-2 outline-none maini"
              />
            </div>
          </aside>

          <button
            className="block bg-gradient-to-tr from-blue-600 to-red-500 rounded-lg w-full my-[2rem] p-[0.7rem] "
            type="submit"
          >
            {loading ? <SyncLoader color="white" /> : 'Register'}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Registration;
