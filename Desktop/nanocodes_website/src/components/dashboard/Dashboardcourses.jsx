
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../useFetch";
import { Link } from "react-router-dom";

const Dashboardcourses = () => {
    const location = useLocation();
    const [divSize, setDivSize] = useState({ width: '250px', height: '300px' }); // Initial size of the div
    const {data} = useFetch("https://api.nanocodes.com.ng/courses/")
  
    useEffect(() => {
      // Check if the current URL matches the desired URL
      if (location.pathname === "/dashboard") {
        setDivSize({ width: '165px', height: '200px' }); // Change the width of the div to 400px
      } else {
        setDivSize({ width: '250px', height: '300px' }); // Reset the width to the initial value if the URL doesn't match
      }
    }, [location]);
    
  return (
    <div className="grid grid-cols-4 mt-[4rem]">
         {data?.map((cardData) => {
        return (
          <section >
             <Link to={`/course/${cardData.id}`} key={cardData.id}>
            <div style={divSize} className="h-[300px] w-[250px] mb-[1rem] relative">
              <img src={`https://api.nanocodes.com.ng${cardData.course_outline}`} alt="" className="h-full w-full" />
              <aside className="flex w-full justify-between absolute z-20 bottom-[5%] text-white p-[1rem]">
                <p>{cardData.course_title}</p>
                <ChevronRightIcon />
              </aside>
            </div>
            </Link>
          </section>
        );
      })}
    </div>
  )
}

export default Dashboardcourses