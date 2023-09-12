import React from "react";
import { SwiperSlide } from "swiper/react";
import SliderPerView from "./SliderPerView";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const SwiperCard = () => {
  const { data, loading } = useFetch(
    "https://myapi.nanocodes.com.ng/courses/"
  );
  console.log(data)

  return (
    <section className="py-[3rem]">
      <h2 className="text-center  text-3xl font-bold text-white uppercase mb-[1rem]">
        Get Modern and <br />
        up to date Tech Skills
      </h2>
      {loading ? (
        <div className="flex justify-center">
          <PropagateLoader color="hsla(168, 14%, 90%, 0.95)" size={30} />
        </div>
      ) : (
        <SliderPerView>
          {data?.map((data) => {
            return (
              <SwiperSlide>
                <Link to={`/course/${data.id}`}>
                  <img
                    src={`https://myapi.nanocodes.com.ng${data.course_outline}`}
                    alt=""
                    className="md:w-[220px] w-full h-[250px] object-cover rounded-lg"
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </SliderPerView>
      )}
    </section>
  );
};

export default SwiperCard;
