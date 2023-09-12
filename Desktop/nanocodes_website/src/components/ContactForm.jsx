import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { SyncLoader } from 'react-spinners';
import { API_URL } from '../constants/api';

const ContactForm = ({ className }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMessage = async (event) => {
    const user = {
      name,
      email,
      message,
    };
    setName('');
    setEmail('');
    setMessage('');
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/contact/`, user);

      console.log(response);
      if (response.status === 200) {
        toast.success('Message sent successfully');
      }
      setLoading(false);
    } catch (error) {
      toast.error('Message not sent');
      setLoading(false);
    }
    console.log(user);
  };

  const classes = className;
  return (
    <div>
      <form action="#" className={classes} onSubmit={handleMessage}>
        <div>
          <label htmlFor="#">Name </label> <br />
          <input
            required
            type="text"
            value={name}
            className=" w-full p-2 rounded-md mb-2 outline-none maini"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="#">E-mail </label> <br />
          <input
            type="email"
            required
            value={email}
            className=" w-full p-2 rounded-md mb-2 outline-none maini"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <label htmlFor="#">Message </label>
        <br />
        <textarea
          required
          name=""
          id=""
          cols="30"
          rows="10 "
          value={message}
          className=" w-full p-2 rounded-md mb-2 outline-none maini"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <button
          className="block bg-gradient-to-tr from-blue-600 to-red-500 rounded-lg w-full p-[0.7rem]"
          type="submit"
        >
          {loading ? <SyncLoader color="white" size={10} /> : 'Get in Touch'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
