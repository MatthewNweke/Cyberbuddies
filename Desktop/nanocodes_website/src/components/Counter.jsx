import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import student from "../images/student-person-3-svgrepo-com 1.png";
import present from "../images/project-presentation-svgrepo-com 1.png";
import coding from "../images/coding-monitor-svgrepo-com 1.png";

const Counter = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <section className="my-[4rem]  bg-gray-300 bg-opacity-10  backdrop-blur-17">
      <ScrollTrigger
        onEnter={() => setViewPortEntered(true)}
        onExit={() => setViewPortEntered(false)}
      >
       
        <div className="flex flex-wrap justify-between md:w-[50%] w-4/5 m-auto md:my-auto my-[1rem] text-center text-white z-10 relative">
          <aside className=" p-[1rem] flex items-center">
            <span>
              <img src={student} alt="" className="md:w-[50px] md:h-[50px] w-[30px]"/>
            </span>
            <span className="text-left">
              <h1 className="md:text-3xl text-xl text-[#fff] mb-1 font-bold ">
                {viewPortEntered && <CountUp end={340} duration={2} />}+
              </h1>
              <p>Students</p>
            </span>
          </aside>
          <aside className=" p-[1rem] md:m-0 my-[0.5rem] flex items-center">
            <span>
              <img src={present} alt="" className="md:w-[50px] md:h-[50px] w-[30px]" />
            </span>
            <span className="text-left">
              <h1 className="md:text-3xl text-xl text-[#fff] mb-1 font-bold">
                {viewPortEntered && <CountUp end={34} duration={2} />}+
              </h1>
              <p>Projects</p>
            </span>
          </aside>
          <aside className=" p-[1rem] md:m-0 my-[0.5rem] flex items-center gap-2">
            <span>
              <img src={coding} alt="" className="md:w-[50px] md:h-[50px] w-[30px]" />
            </span>
            <span className="text-left">
              {" "}
              <h1 className="md:text-3xl text-xl text-[#fff] mb-1 font-bold">
                {viewPortEntered && <CountUp end={10} duration={2} />}+
              </h1>
              <p>Years of Experience</p>
            </span>
          </aside>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default Counter;
