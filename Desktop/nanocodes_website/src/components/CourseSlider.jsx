import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { API_URL } from '../constants/api';
import useFetch from '../useFetch';
import SliderPerView from './SliderPerView';

const CourseSlider = () => {
  const { data } = useFetch(`${API_URL}/courses/`);
  const location = useLocation();
  const [divSize, setDivSize] = useState({ width: '250px', height: '300px' }); // Initial size of the div

  useEffect(() => {
    // Check if the current URL matches the desired URL
    if (location.pathname === '/dashboard') {
      setDivSize({ width: '180px', height: '210px' }); // Change the width of the div to 400px
    } else {
      setDivSize({ width: '250px', height: '300px' }); // Reset the width to the initial value if the URL doesn't match
    }
  }, [location]);

  return (
    <SliderPerView>
      {data?.slice(-4).map((cardData) => {
        return (
          <SwiperSlide>
            <Link to={`/course/${cardData.id}`} key={cardData.id}>
              <div
                style={divSize}
                className="h-[300px] w-[250px] mb-[1rem] relative"
              >
                <img
                  src={`${API_URL}${cardData.course_outline}`}
                  alt=""
                  className="h-full w-full"
                />
                <aside className="flex w-full justify-between absolute z-20 bottom-[5%] text-white p-[1rem]">
                  <p>{cardData.title}</p>
                  <ChevronRightIcon />
                </aside>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </SliderPerView>
  );
};

export default CourseSlider;
