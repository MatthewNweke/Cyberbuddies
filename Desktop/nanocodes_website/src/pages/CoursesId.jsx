import React, { useState } from "react";
import { BsChevronRight as ChevronDownIcon } from "react-icons/bs";
import Layout from "../components/Layout";
import useFetch from "../useFetch";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import { useParams } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import CourseSlider from "../components/CourseSlider";
import Paystack from "../components/Paystack";

const CoursesId = () => {
  const { id } = useParams();
  console.log(id);

  const { data } = useFetch(
    `https://api.nanocodes.com.ng/courses/${id}`
  );
  console.log(data);
  let courseOutline,
    courseTitle,
    description,
    noOfStudents,
    price,
    tutor,
    isRequired,
    youWillLearn;

  if (data !== null) {
    ({
      course_outline: courseOutline,
      course_title: courseTitle,
      description,
      no_of_students: noOfStudents,
      price,
      tutor,
      what_is_required: isRequired,
      what_you_will_learn: youWillLearn,
    } = data);
  }
  console.log(tutor)
  let tutorImg, firstName, lastName;
  if (tutor !== undefined && tutor !== null) {
    // Destructure the tutor object
    ({
      image: tutorImg,
      first_name: firstName,
      last_name: lastName,
    } = tutor);
  }
//   const { image, first_name, last_name } = tutor;
   console.log(tutorImg, firstName, lastName);
 
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "Description",
      answer: description,
    },
    {
      question: "What You Will Learn",
      answer: youWillLearn,
    },
    {
      question: "What is Required",
      answer: isRequired === "" ? "No requirements now" : isRequired,
    },
    {
      question: "Course Outline",
      answer:
        "You can install React and Tailwind using npm or yarn. Here's an example command: npm install react tailwindcss",
    },
  ];
  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }
  return (
    <div>
      <Layout>
        <div className="mt-[8rem] mb-[4rem] w-4/5 m-auto">
          <div className="flex gap-6 items-start md:flex-row flex-col">
            <aside className="basis-[70%]">
              <div className="h-[250px] w-full rounded-md relative ">
                <div className="absolute h-full w-full left-0 top-0 bg-[red] z-20 opacity-[0.3] rounded-md"></div>
                <img
                  src={`https://api.nanocodes.com.ng${courseOutline}`}
                  alt=""
                  className="h-full object-cover w-full rounded-md absolute top-0 left-0"
                />

                <figure className="z-20 relative flex flex-col justify-end h-full items-center p-[2rem] text-white">
                  <h1 className="font-bold uppercase text-3xl mb-[1rem]">
                    {courseTitle}
                  </h1>
                  <div>
                    <span>
                      {" "}
                      <SchoolIcon /> {noOfStudents} students
                    </span>
                    <span className="mx-[1rem]">
                      {" "}
                      <PersonIcon />  {firstName} {lastName}
                    </span>
                  </div>
                </figure>
              </div>

              <div className="text-white  m-auto mt-[8rem] ">
                {faqs.map((faq, index) => (
                  <div key={index} className=" py-4">
                    <button
                      onClick={() => handleClick(index)}
                      className="flex justify-between  rounded-sm   text-white items-center w-full px-4 py-2 text-lg font-medium text-left  focus:outline-none "
                    >
                      <span>{faq.question}</span>
                      <ChevronDownIcon
                        className={`${
                          activeIndex === index ? "transform rotate-90" : ""
                        } w-5 h-5`}
                      />
                    </button>
                    {activeIndex === index && (
                      <p className="mt-2 px-4 text-gray-500 p-[1.5rem]  bg-gray-300 bg-opacity-5 backdrop-blur-md rounded-md">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </aside>
            <aside className="basis-[30%]">
              <fig
                className="min-h-[400px] w-[300px] text-center text-white rounded-[10px] bg-gradient-to-r-yellow-blue-white
              my-[1rem] mx-[0.5rem] border-2 p-[1rem] flex flex-col justify-center items-center bg-white/30 backdrop-blur-sm hover:scale-[1.1] cursor-pointer hover:border-[#030C4B] hover:border-4 card_content"
              >
                <h2 className="text-3xl font-bold my-[1rem]"> &#8358;{price}</h2>
                <ul className="text-left p-[1rem]">
                  <li className="my-[0.7rem]">
                    {" "}
                    <WorkspacePremiumIcon /> Internationally accepted
                    Certificate
                  </li>
                  <li className="my-[0.7rem]">
                    {" "}
                    <BrowserUpdatedIcon />
                    Downloadable Resorces
                  </li>
                  <li className="my-[0.7rem]">
                    {" "}
                    <BrowserUpdatedIcon />
                    Lifetime access to Resources
                  </li>
                </ul>
               <Paystack price={price} course={courseTitle} />
              </fig>

              <figure className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-white text-3xl font-bold">Tutor</h1>

                <div className="min-h-[420px] w-[300px]  py-[1rem] relative">
                  <img
                    src={`https://api.nanocodes.com.ng${tutorImg}`}
                    alt=""
                    className="m-auto h-[300px] w-[300px] my-[1rem] rounded-[50%] object-cover z-20 relative"
                  />
                  <main className=" h-[50%] w-full  absolute bottom-0 flex flex-col justify-end bg-white/30 bg-gradient-to-t-via-gray-100/90-to-transparent backdrop-blur-sm">
                    <h1 className="text-[white] z-70 relative text-3xl font-bold text-center ">
                      {firstName} {lastName}
                    </h1>
                    <h4 className="text-[white] text-2xl  text-center font-bold">
                       Programmer
                    </h4>
                  </main>
                </div>
              </figure>
            </aside>
          </div>
        </div>
        <CourseSlider />
      </Layout>
    </div>
  );
};

export default CoursesId;
