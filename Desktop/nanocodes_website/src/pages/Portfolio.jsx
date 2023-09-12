import React, { useState } from "react";
import { BsChevronRight as ChevronDownIcon } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Layout from "../components/Layout";
import useFetch from "../useFetch";
import { PropagateLoader } from "react-spinners";

function Portfolio() {
  const { data, loading } = useFetch(
    "https://api.nanocodes.com.ng/portfolio/"
  );
  console.log(data);

  const fieldMap = data?.reduce((acc, item) => {
    const { field, image } = item;
    const existingField = acc.find((obj) => obj.field === field);
    if (existingField) {
      existingField.images.push(image);
    } else {
      acc.push({
        field,
        images: [image],
      });
    }
    return acc;
  }, []);
  console.log(fieldMap);
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <Layout>
      <div className="text-white md:w-3/5 w-[95%] m-auto mt-[8rem] min-h-[100vh] ">
        <h2 className="text-white text-center text-3xl font-bold p-[2rem] ">
          PORTFOLIO
        </h2>
        {loading ? (
          <div className="flex justify-center">
            <PropagateLoader color="hsla(168, 14%, 90%, 0.95)" size={30} />
          </div>
        ) : (
          <>
            {fieldMap?.slice(0, 3).map((faq, index) => (
              <div key={index} className=" py-4">
                <button
                  onClick={() => handleClick(index)}
                  className="flex justify-between   text-white items-center w-full px-4 py-2 text-lg font-medium text-left  focus:outline-none "
                >
                  <span>{faq.field}</span>
                  <ChevronDownIcon
                    className={`${
                      activeIndex === index ? "transform rotate-90" : ""
                    } w-5 h-5`}
                  />
                </button>
                {activeIndex === index && (
                  <div>
                    <p className="mt-2 px-4 text-gray-500 w-full p-[1.5rem] border flex items-center justify-around border-white bg-gray-300 bg-opacity-5 backdrop-blur-md rounded-md">
                      {faq.images.map((image, index) => (
                        <img
                          key={index}
                          src={`https://api.nanocodes.com.ng${image}`}
                          alt={`age ${index}`}
                          className="md:h-[200px] rounded-lg md:w-[200px] object-cover h-[100px] w-[100px] "
                        />
                      ))}
                    </p>
                    <p className="italic text-right flex items-center justify-end my-3 cursor-pointer">
                      See All Applications <AiOutlineArrowRight />
                    </p>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </Layout>
  );
}

export default Portfolio;
