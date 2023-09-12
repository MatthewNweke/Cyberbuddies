import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { API_URL } from '../constants/api';
import nanoImage from '../images/Nanocodes Logo 1.png';
const token = localStorage.getItem('access_token');

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [about, setAbout] = useState(false);
  const [service, setService] = useState(false);
  const [mobile, setMobile] = useState(false);
  const history = useNavigate();
  // const { data } = useFetch('https://api.nanocodes.com.ng/courses/');
  const { data } = useSWR(`${API_URL}/courses`);

  const changeMobile = () => {
    setMobile(!mobile);
  };

  return (
    <div className="flex justify-between h-[90px] bg-[#02072f] items-center px-5 md:px-3 lg:px-14  fixed top-0 w-full z-30">
      <aside className="w-[200px]">
        <Link to="/">
          <img src={nanoImage} alt="" className="w-full" />
        </Link>
      </aside>
      <aside className="flex items-center">
        <ul className="md:flex items-center mr-3  hidden">
          <motion.li
            whileHover={{
              originx: 0,
              scale: 1,
              color: '#f89112',
              fontWeight: 'bold',
            }}
            className="flex items-center text-white text-[18px] p-[0.5rem] relative cursor-pointer"
          >
            <a
              href="https://shop.nanocodes.com.ng/"
              target="_blank"
              rel="noreferrer"
            >
              Shop
            </a>
          </motion.li>
          <motion.li
            whileHover={{
              originx: 0,
              scale: 1,
              color: '#f89112',
              fontWeight: 'bold',
            }}
            className="flex items-center text-white text-[18px] p-[0.5rem] relative cursor-pointer"
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            Courses <BiChevronDown />
            {dropdown && (
              <motion.div
                className="text-[14px] absolute bg-[blue] text-white p-[1rem] left-[-100px] top-[90%] min-w-[300px] max-w-[472px] rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, type: 'spring' }}
              >
                <ul className="grid grid-cols-3 mb-[1rem]">
                  {data?.map((course) => {
                    return (
                      <Link to={`/course/${course.id}`} key={course.id}>
                        <motion.li className="capitalize mb-[1rem]">
                          {course.course_title}
                        </motion.li>
                      </Link>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </motion.li>
          <motion.li
            whileHover={{
              originx: 0,
              scale: 1,
              color: '#f89112',
              fontWeight: 'bold',
            }}
            className="flex items-center text-white text-[18px] p-[0.5rem] relative cursor-pointer"
            onMouseOver={() => setAbout(true)}
            onMouseLeave={() => setAbout(false)}
          >
            About us <BiChevronDown />
            {about && (
              <motion.div
                className="text-[14px] absolute bg-[blue] text-white p-[1rem] text-center top-[90%] w-[152px] rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, type: 'spring' }}
              >
                <ul className=" mb-[1rem]">
                  <Link to="/about#who">
                    <motion.li className="border-b-2 p-[0.5rem]">
                      Who We Are{' '}
                    </motion.li>
                  </Link>

                  <Link to="/gallery">
                    <motion.li className="border-b-2 p-[0.5rem]">
                      Gallery
                    </motion.li>
                  </Link>
                  <Link to="/portfolio">
                    <motion.li className="border-b-2 p-[0.5rem]">
                      {' '}
                      Portfolio
                    </motion.li>
                  </Link>
                  <Link to="/about#team">
                    <motion.li className="border-b-2 p-[0.5rem]">
                      {' '}
                      Team
                    </motion.li>
                  </Link>
                  <motion.li className="border-b-2 p-[0.5rem]">
                    {' '}
                    Mission
                  </motion.li>
                  <motion.li className="border-b-2 p-[0.5rem]">
                    {' '}
                    vision
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </motion.li>
          <motion.li
            whileHover={{
              originx: 0,
              scale: 1,
              color: '#f89112',
              fontWeight: 'bold',
            }}
            className="flex items-center text-white text-[18px] p-[0.5rem] relative cursor-pointer"
            onMouseOver={() => setService(true)}
            onMouseLeave={() => setService(false)}
          >
            {service && (
              <motion.div
                className="text-[14px] absolute right-[2%] bg-[blue] text-white px-[1rem]  top-[90%] w-[200px] text-center rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <ul className=" mb-[1rem] ">
                  <Link to="/services/web-desgin?1">
                    <motion.li className="border-b-2 p-[0.5rem]">
                      Web Design & Development{' '}
                    </motion.li>
                  </Link>
                  <Link to="/services/mobile-app-development?2">
                    <motion.li className="border-b-2 p-[0.5rem]">
                      Mobile App Development
                    </motion.li>
                  </Link>
                  <Link to="/services/digital-marketing?3">
                    <motion.li className="border-b-2 p-[0.5rem]">
                      {' '}
                      Digital Marketing
                    </motion.li>
                  </Link>
                  <Link to="/services/branding?4">
                    <motion.li className="border-b-2 p-[0.5rem]">
                      {' '}
                      Branding
                    </motion.li>
                  </Link>
                  <Link to="/services/company-registration?5">
                    <motion.li className="border-b-2 p-[0.5rem]">
                      {' '}
                      Company Registration
                    </motion.li>
                  </Link>
                  <Link to="/services/cryptocurrency-exchange?6">
                    <motion.li className="border-b-2 p-[0.5rem]">
                      {' '}
                      Cryptocurrency Exchange{' '}
                    </motion.li>
                  </Link>
                  <Link to="/services/web3?7">
                    <motion.li className="border-b-2 p-[0.5rem]">
                      {' '}
                      Web3{' '}
                    </motion.li>
                  </Link>
                </ul>
              </motion.div>
            )}
            Services <BiChevronDown />
          </motion.li>

          <motion.li
            whileHover={{ originx: 0, color: '#f89112', fontWeight: 'bold' }}
            className="flex items-center text-white text-[18px] p-[0.5rem] relative"
          >
            <Link to="/contact"> Contact us</Link>
          </motion.li>
          {token ? (
            <div
              onClick={() => history('/dashboard')}
              className="cursor-pointer"
            >
              <Avatar src="" alt="" />
            </div>
          ) : (
            <motion.li
              whileHover={{ originx: 0, color: '#f89112', fontWeight: 'bold' }}
              className="flex items-center text-white text-[18px] p-[0.5rem] relative"
            >
              <Link to="/login">Log in</Link>
            </motion.li>
          )}
        </ul>
        <div className="inline-block md:hidden">
          {!mobile && (
            <MenuIcon
              className="text-white mx-[1rem] block md:hidden"
              style={{ fontSize: '35px' }}
              onClick={changeMobile}
            />
          )}
          {mobile && (
            <ClearIcon
              className="text-white mx-[1rem]"
              style={{ fontSize: '35px' }}
              onClick={changeMobile}
            />
          )}
        </div>
        {mobile && (
          <ul className="mr-3 absolute bg-[blue] rounded-md p-[1rem] top-20 right-8 md:hidden">
            <motion.li
              className="flex items-center text-white text-[20px] p-[0.5rem] relative"
              onMouseOver={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              Courses <BiChevronDown />
              {dropdown && (
                <motion.div
                  className="text-[14px] absolute bg-[blue] right-[2%] text-white p-[1rem] z-20 top-[90%] min-w-[300px] rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, type: 'spring' }}
                >
                  <ul className="grid  mb-[1rem]">
                    {data?.map((course) => {
                      return (
                        <Link to={`/course/${course.id}`} key={course.id}>
                          <motion.li className="capitalize mb-[1rem]">
                            {course.course_title}
                          </motion.li>
                        </Link>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </motion.li>
            <motion.li
              whileHover={{ originx: 0, scale: 1, color: '#f8e112' }}
              className="flex items-center text-white text-[20px] p-[0.5rem] relative"
              onMouseOver={() => setAbout(true)}
              onMouseLeave={() => setAbout(false)}
            >
              About us <BiChevronDown />
              {about && (
                <motion.div
                  className="text-[14px] absolute right-[2%]  bg-[blue] z-40 text-white p-[1rem] text-center top-[90%] w-[152px] rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, type: 'spring' }}
                >
                  <ul className=" mb-[1rem] ">
                    <motion.li className="border-b-2 p-[0.5rem]">
                      Who We Are{' '}
                    </motion.li>
                    <motion.li className="border-b-2 p-[0.5rem]">
                      Gallery
                    </motion.li>
                    <motion.li className="border-b-2 p-[0.5rem]">
                      {' '}
                      Portfolio
                    </motion.li>
                    <motion.li className="border-b-2 p-[0.5rem]">
                      {' '}
                      Team
                    </motion.li>
                    <motion.li className="border-b-2 p-[0.5rem]">
                      {' '}
                      Mission
                    </motion.li>
                    <motion.li className="border-b-2 p-[0.5rem]">
                      {' '}
                      vision
                    </motion.li>
                  </ul>
                </motion.div>
              )}
            </motion.li>
            <motion.li
              className="flex items-center text-white text-[20px] p-[0.5rem] relative"
              onMouseOver={() => setService(true)}
              onMouseLeave={() => setService(false)}
            >
              {service && (
                <motion.div
                  className="text-[14px] absolute right-[2%] bg-[blue] text-white px-[1rem] z-20 top-[90%] w-[200px] text-center rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <ul className=" mb-[1rem] ">
                    <Link to="/services/web-design?1">
                      <motion.li className="border-b-2 p-[0.5rem]">
                        Web Design & Development{' '}
                      </motion.li>
                    </Link>
                    <Link to="/services/mobile-app-development?2">
                      <motion.li className="border-b-2 p-[0.5rem]">
                        Mobile App Development
                      </motion.li>
                    </Link>
                    <Link to="/services/digital-marketing?3">
                      <motion.li className="border-b-2 p-[0.5rem]">
                        {' '}
                        Digital Marketing
                      </motion.li>
                    </Link>
                    <Link to="/services/branding?4">
                      <motion.li className="border-b-2 p-[0.5rem]">
                        {' '}
                        Branding
                      </motion.li>
                    </Link>
                    <Link to="/services/company-registration?5">
                      <motion.li className="border-b-2 p-[0.5rem]">
                        {' '}
                        Company Registration
                      </motion.li>
                    </Link>
                    <Link to="/services/cryptocurrency-exchange?6">
                      <motion.li className="border-b-2 p-[0.5rem]">
                        {' '}
                        Cryptocurrency Exchange{' '}
                      </motion.li>
                    </Link>
                    <Link to="/services/web3?7">
                      <motion.li className="border-b-2 p-[0.5rem]">
                        {' '}
                        Web3{' '}
                      </motion.li>
                    </Link>
                  </ul>
                </motion.div>
              )}
              Services <BiChevronDown />
            </motion.li>
            <Link to="/contact">
              <motion.li className="flex items-center text-white text-[20px] p-[0.5rem] relative">
                Contact us
              </motion.li>
            </Link>
            <p class="flex items-center text-white text-[20px] p-[0.5rem] relative">
              <Link to="/login">Log in</Link>
            </p>
          </ul>
        )}

        {/* <p class="hidden md:flex font-semibold text-xl leading-10 text-orange-500 font-poppins">
          <Link to="/login">Log in</Link>
        </p> */}
      </aside>
    </div>
  );
};

export default Navbar;
