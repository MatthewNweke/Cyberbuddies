import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Link } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { API_URL } from '../constants/api';
import useFetch from '../useFetch';
import CourseSlider from './CourseSlider';

const CourseCard = () => {
  const { data, loading } = useFetch(`${API_URL}/courses/`);

  console.log(data);
  return (
    <>
      <div className="flex text-white items-center gap-3 w-3/5 m-auto mt-[3rem]">
        <WhatshotIcon /> <p>Trending</p> <hr className="w-full" />
      </div>
      {loading ? (
        <div className="flex justify-center">
          <PuffLoader color="white" size={100} />
        </div>
      ) : (
        <>
          <CourseSlider />

          <hr className="w-3/5 m-auto" />
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:w-4/5 m-auto my-[2rem] gap-4">
            {data?.map((cardData) => {
              return (
                <Link to={`/course/${cardData.id}`} key={cardData.id}>
                  <div className="md:h-[300px] md:w-[250px] h-[200px] w-[170px] mb-[1rem] m-[1rem] relative">
                    <img
                      src={`${API_URL}${cardData.course_outline}`}
                      alt=""
                      className="h-full w-full rounded-md object-cover"
                    />
                    <aside className="flex w-full justify-between absolute z-20 bottom-[5%] text-white p-[1rem]">
                      <p>{cardData.course_title}</p>
                      <ChevronRightIcon />
                    </aside>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default CourseCard;
