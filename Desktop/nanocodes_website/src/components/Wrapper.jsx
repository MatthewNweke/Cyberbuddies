import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { SwiperSlide } from 'swiper/react';
import slide1 from '../images/coding.jpg';
import float1 from '../images/float1.png';
import float2 from '../images/float2.png';
import float3 from '../images/float3.png';
import teach from '../images/programmer-working.png';
import deliver from '../images/upcoming.png';
import Swiperjs from './Swiperjs';

const Wrapper = () => {
  return (
    <section className="mt-[90px] flex md:flex-row flex-col items-center justify-around min-h-[90vh] p-[1rem]">
      <div className="basis-[45%] relative">
        <h2 className="text-3xl md:text-5xl text-white font-bold mb-[2rem]">
          {/* Professional Software Development */}
          Build and ship reliable products with on-demand engineering teams.
          <div className="mt-[2rem] block">
            <TypeAnimation
              sequence={[
                'Website development',
                500,
                'Mobile development',
                500,
                'Digital marketing',
                500,
                'Product design',
                500,
                'Graphics design',
                500,
                'Forex trading',
                500,
                'and lots more...',
                500,
              ]}
              style={{ fontSize: '30px', color: '#f89112' }}
              repeat={Infinity}
            />
          </div>
        </h2>
        <Link to="/register">
          <button className="bg-gradient-to-r from-blue-900 via-transparent to-red-500 rounded-[10px] px-[4rem] py-[0.7rem] text-white font-bold">
            Get Started
          </button>
        </Link>
        <img src={float1} alt="" className="absolute top-[-40%] left-[-5%] " />
      </div>
      <div className="basis-[45%] md:w-[300px] w-[95%] relative">
        <Swiperjs>
          <SwiperSlide>
            <div className="relative min-h-[350px] mb-5">
              <img
                src={teach}
                alt=""
                className="md:w-[550px] w-full m-auto rounded-[30px] h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute bottom-[-18px] z-[10] flex items-center justify-center w-full">
                <p className="  bg-[#f89112] shadow-lg rounded-[10px] w-[50%] py-[0.5rem] font-bold text-2xl text-white text-center">
                  We Teach
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative min-h-[350px] mb-5">
              <img
                src={slide1}
                alt=""
                className="md:w-[550px] w-full m-auto rounded-[30px] h-[300px] md:h-[400px]"
              />
              <div className="absolute bottom-[-18px] z-[10] flex items-center justify-center w-full">
                <p className="bg-[#f89112] shadow-lg rounded-[5px] w-[50%] py-[0.5rem] font-bold text-2xl text-white text-center">
                  We Code
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative min-h-[350px] mb-5">
              <img
                src={deliver}
                alt=""
                className="md:w-[550px] w-full m-auto rounded-[30px] h-[300px] md:h-[400px]"
              />
              <div className="absolute bottom-[-18px] z-[10] flex items-center justify-center w-full">
                <p className="bg-[#f89112] shadow-lg rounded-[10px] w-[50%] py-[0.5rem] font-bold text-2xl text-white text-center">
                  We Deliver
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiperjs>
        <img src={float2} alt="" className="absolute top-0 right-[10%] z-10" />
        <img src={float3} alt="" className="absolute bottom-0 left-[0%] " />
      </div>
    </section>
  );
};

export default Wrapper;
