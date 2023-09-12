import React from "react";
import tutor from '../images/tutor.png'
import { Link } from "react-router-dom";

const Team = () => {
  const teachers = [
    {
      name: "Harrison Ozioko",
      img: tutor,
      id: 1,
      course: "Python Programming",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      name: "Harrison Ozioko",
      img: tutor,
      id: 2,
      course: "Python Programming",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      name: "Harrison Ozioko",
      img: tutor,
      id: 3,
      course: "Python Programming",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      name: "Harrison Ozioko",
      img: tutor,
      id: 4,
      course: "Python Programming",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      name: "Harrison Ozioko",
      img: tutor,
      id: 5,
      course: "Python Programming",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      name: "Harrison Ozioko",
      img: tutor,
      id: 6,
      course: "Python Programming",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];
  return (
    <section className="grid md:grid-cols-3 grid-cols-2 justify-center w-[90%] m-auto place-items-center my-[4rem]">
      {teachers.map((teacher) => {
        return (
         <Link to={`/tutor/${teacher.id}`} key={teacher.id}>
          <div className="md:min-h-[420px] min-h-[320px] my-[1rem] md:w-[300px] w-[auto] md:rounded-none rounded-t-full py-[1rem] md:bg-transparent bg-white/30 md:backdrop-filter-none backdrop-blur-sm relative" >
            <img
              src={teacher.img}
              alt=""
              className="m-auto md:h-[300px] md:w-[300px] w-[170px] h-[170px] my-[1rem] z-20 relative"
            />
            <main className=" md:h-[50%] h-full w-full  absolute bottom-0 flex flex-col justify-end md:bg-white/30 bg-transparent backdrop-blur-sm">
              <h1 className="text-[white] z-70 relative md:text-3xl text-xl font-bold text-center ">
                {teacher.name}
              </h1>
              <h4 className="text-[white] md:text-2xl text-lg pb-[1rem] text-center font-bold">
               {teacher.course}
              </h4>
            </main>
          </div>
         </Link>
        );
      })}
    </section>
  );
};

export default Team;
