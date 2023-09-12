import axios from 'axios';
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import Layout from '../components/Layout';
import { API_URL } from '../constants/api';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const logindata = useContext(UserContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // ...

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const user = {
      username,
      password,
      email,
    };
    // console.log(user);
    try {
      const response = await axios.post(`${API_URL}/auth/login/`, user);
      console.log(response);
      if (response.status === 200) {
        toast.success('Successfully logged in');
        const { access_token } = response.data;
        console.log(access_token);
        logindata.tokenHandler(access_token);
        if (access_token) {
          const { user } = response.data;
          console.log(user);
          logindata.userHandler(user);
          localStorage.setItem('Username', email);
          localStorage.setItem('Password', password);
          navigate('/dashboard');
          window.location.reload();
        }
      } else {
        // Handle unexpected response status
        toast.error('Unexpected response status: ' + response.status);
      }
    } catch (err) {
      console.error(err.response);
      // Handle error
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  // ...

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setEmail(e.target.value); // Set the email state to the same value as username
  };

  return (
    <Layout>
      <div className="min-h-[100vh] flex items-center flex-col text-white justify-center">
        <p className="font-bold text-3xl">Sign in</p>
        <form action="#" className="md:w-[40%] w-4/5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="#">Email </label> <br />
            <input
              type="email"
              autoComplete="off"
              onChange={handleUsernameChange} // Update the event handler
              className=" w-full p-2 rounded-md mb-2 outline-none maini"
              value={username}
              required
            />
          </div>
          <div className="hidden">
            <label htmlFor="#">Email </label> <br />
            <input
              type="email"
              autoComplete="off"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" w-full p-2 rounded-md mb-2 outline-none maini"
              value={email}
              required
            />
          </div>
          <div>
            <label htmlFor="#">password</label> <br />
            <input
              type="password"
              autoComplete="off"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              required
              className=" w-full p-2 rounded-md mb-2 outline-none maini"
            />
          </div>

          <button
            type="submit"
            className="block bg-gradient-to-tr from-blue-600 to-red-500 rounded-lg w-full my-[2rem] p-[0.7rem]"
          >
            {loading ? <SyncLoader color="white" size={10} /> : 'Login'}
          </button>
        </form>
        <div className="flex flex-col items-center text-white">
          <Link to="/forgot-password" className="text-blue-500 underline mb-2">
            Forgot Password?
          </Link>
          <Link to="/register" className="text-blue-500 underline">
            Create New Account
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
