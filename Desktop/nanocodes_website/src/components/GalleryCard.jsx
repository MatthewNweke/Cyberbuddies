import WhatshotIcon from '@mui/icons-material/Whatshot';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

const GalleryCard = ({ data, loading }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (index) => {
    setIsHovered(index === isHovered ? true : index);
  };

  const handleMouseLeave = (index) => {
    setIsHovered(index === isHovered ? false : index);
  };

  return (
    <>
      <div className="flex text-white items-center gap-3 w-3/5 m-auto mt-[3rem]">
        <WhatshotIcon /> <p>Trending</p> <hr className="w-full" />
      </div>

      {loading !== undefined || data?.length === 0 ? (
        <div className="flex justify-center my-[5rem]">
          <PropagateLoader color="white" size={30} />
        </div>
      ) : (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:w-4/5 m-auto my-[2rem] gap-4">
          {data?.map((cardData, index) => {
            return (
              <Link
                to={`/gallery/${cardData.id}`}
                key={cardData.id}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="md:h-[300px] md:w-[250px] h-[200px] w-[170px] mb-[1rem] m-[1rem] relative ">
                  <img
                    src={`https://api.nanocodes.com.ng${cardData.image}`}
                    alt=""
                    className="h-full w-full rounded-md object-cover"
                  />
                  {isHovered === index && (
                    <div className="text-center absolute bottom-0 left-0 w-full p-[1rem] text-white bg-[blue] opacity-[0.7] rounded-md">
                      <p className="opacity-[1] font-bold capitalize">
                        {cardData.title}
                      </p>
                      <p>
                        By{' '}
                        {cardData.user.username === ''
                          ? 'unknown user'
                          : cardData.user.username}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default GalleryCard;
