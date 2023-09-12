import { Email } from '@mui/icons-material';
import React from 'react';
import GalleryUpload from '../components/GalleryUpload';
import CreateTimeTable from '../components/dashboard/CreateTimeTable';
import DashbaordLayout from '../components/dashboard/DashbaordLayout';
import Dashboardcourses from '../components/dashboard/Dashboardcourses';
import dashImg from '../images/dashimg.png';
import upcoming from '../images/upcoming.png';
import watch from '../images/watch.png';

const Dashboard = () => {
  const bg = 'linear-gradient(93.62deg, #031FFF 6.13%, #D9745F 73.02%)';
  return (
    <DashbaordLayout>
      <section className="flex justify-around flex-wrap">
        <aside>
          <div className="flex gap-6 flex-wrap justify-center">
            <img src={dashImg} alt="" />
            <img src={upcoming} alt="" />
          </div>
          <div>
            <Dashboardcourses />
          </div>
        </aside>
        <aside>
          <div className="md:block grid items-center justify-center">
            <div className="text-white border-[1px] p-[1rem] w-[200px] rounded-md flex flex-col items-center justify-center my-[1rem]">
              <h1 className="flex items-center gap-1 mb-[0.5rem] text-sm font-semibold">
                <Email />
                <p>Send a message</p>
              </h1>
              <button
                style={{ background: bg }}
                className="md:px-[1.5rem] md:py-[0.3rem] px-[1rem] py-[0.1rem] rounded-md"
              >
                Get in touch
              </button>
            </div>

            <CreateTimeTable />

            <div className="text-white border-[1px] p-[1rem] w-[200px] rounded-md flex flex-col items-center justify-center">
              <h1 className="mb-[0.5rem] text-sm font-semibold">
                {' '}
                Upload to gallery
              </h1>
              <GalleryUpload />
            </div>
          </div>

          <div className="md:w-[200px] w-[95%]  md:min-h-[200px]  bg-gray-300 bg-opacity-10 my-[1rem] backdrop-blur-17 rounded-[7px] p-[1rem]">
            <img src={watch} alt="" className="w-[95%] m-auto rounded-[7px]" />
            <div className="flex justify-between gap-[4%] p-[0.5rem] text-white">
              <span className="text-[12px]  font-bold ">Smart watch GT54 </span>
              <span className="text-[12px] ">
                <p className="text-[12px]">75,000</p>
                210 Units Sold
              </span>
            </div>
          </div>
        </aside>
      </section>
    </DashbaordLayout>
  );
};

export default Dashboard;
