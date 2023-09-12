import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  BsFacebook,
  BsFillTelephoneFill,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
} from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import logo from '../images/Nanocodes Logo 1.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [sendMail, setSendMail] = useState(false);
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    setLoading(true);
    setSendMail(true);
    e.preventDefault();
    const formData = {
      email,
      send_me_an_email: sendMail,
    };

    try {
      const response = await axios.post(
        'https://api.nanocodes.com.ng/newsletter/',
        formData
      );
      toast.success('Successfully Subscribed');
      setLoading(false);
    } catch (error) {
      toast.success('an error occured');
      setLoading(false);
    }
    setEmail('');
  };
  return (
    <>
      <section className="grid bg-[#02072f] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2%] p-[2rem] text-white">
        <aside className="flex items-center justify-center flex-col">
          <img src={logo} alt="" className="text-center" />
          <ul className="text-left font-medium">
            <Link to="/about">
              <li className="p-[0.5rem] hover:text-[#f89112]">About us</li>
            </Link>
            <li className="p-[0.5rem] hover:text-[#f89112] cursor-pointer">
              Products
            </li>
            <Link to="/courses">
              <li className="p-[0.5rem] hover:text-[#f89112]">Courses</li>
            </Link>
            <li className="p-2 hover:text-[#f89112]">
              <a href="https://shop.nanocodes.com.ng/">Nanotech</a>
            </li>

            <Link to="/contact">
              <li className="p-[0.5rem] hover:text-[#f89112]">Contact us</li>
            </Link>
            <Link to="/faq">
              <li className="p-[0.5rem] hover:text-[#f89112]">FAQs</li>
            </Link>
          </ul>
        </aside>
        <aside className="flex items-center justify-start flex-col">
          <p className="flex items-center mb-4">
            {' '}
            <BsFillTelephoneFill />
            +2347012345678
          </p>
          <p className="flex items-center mb-4">
            {' '}
            <a href="tel:+2348133306121">
              <BsWhatsapp />
              +2348133306121
            </a>
          </p>
          <p className="flex items-center mb-4">
            {' '}
            <HiLocationMarker /> Opp. St. Theresa Cathederal, Enugu Rd, Nsukka.
            Enugu state.
          </p>
        </aside>
        <aside className="text-center">
          <p className="text-2xl font-bold">Subscribe to our newsletter</p>
          <div className="my-3  rounded-lg border-2 bg-white">
            <form action="" onSubmit={subscribe}>
              <input
                type="text"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value.trim())}
                className="w-[70%] h-[40px] bg-opacity-10 backdrop-blur-17 outline-none text-black px-[0.5rem]"
              />
              <button
                type="submit"
                className="w-[30%] bg-[#247BD6] h-[40px] font-bold rounded-lg"
              >
                {loading ? <SyncLoader /> : 'Subscribe'}
              </button>
            </form>
          </div>
          <p>
            Get the latest tech news and job opportunities by subscribing to our
            news letter
          </p>
          <p className="flex items-center justify-center mt-[1rem] font-bold">
            <a href="https://www.facebook.com/nanocodes?mibextid=LQQJ4d">
              <BsFacebook className="mx-[0.5rem]" />{' '}
            </a>
            <a href="">
              <BsTwitter className="mx-[0.5rem]" />{' '}
            </a>

            <a href="https://www.instagram.com/nano_codes/?igshid=MzRlODBiNWFlZA%3D%3D">
              <BsInstagram className="mx-[0.5rem]" />
            </a>
          </p>
        </aside>
      </section>
      <p className="text-center text-white bg-[#02072f] pb-3">
        @Nanocodes Programming 2023
      </p>
    </>
  );
};

export default Footer;
