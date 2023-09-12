import { useState, useEffect } from "react";
import Timetable from "react-timetable-events";
import DashbaordLayout from "../components/dashboard/DashbaordLayout";

const New = () => {
  const [timetable, setTimetable] = useState([]);




  useEffect(() => {
    const fetchNotifications = async () => {
      const accessToken = localStorage.getItem("access_token");
      const username = localStorage.getItem("Username");
      const password = localStorage.getItem("Password");
      console.log(accessToken);

      try {
        const response = await fetch(
          "https://api.nanocodes.com.ng/timetable",
          {
            headers: {
              Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch notifications");
        }

        const data = await response.json();
        setTimetable(data);
       
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotifications();
  }, []);

  const formatEventData = () => {
    const formattedEvents = {};

    timetable.forEach((event) => {
      const day = event?.day.toLowerCase();

      if (!formattedEvents[day]) {
        formattedEvents[day] = [];
      }

      formattedEvents[day].push({
        id: event?.id,
        name: `Course ID: ${event?.course_id}`,
        type: "custom",
        startTime: event?.starts ? new Date(`2000-01-01T${event?.starts}`) : new Date("2018-02-23T11:30:00"), 
        endTime: event?.ends ? new Date(`2000-01-01T${event?.ends}`) : new Date("2018-02-23T13:30:00"), 
      });
    });
    return formattedEvents;
  };
  console.log(formatEventData())
  

  return (
    <DashbaordLayout>
      <Timetable events={formatEventData()} style={{ height: "500px" }} />
    </DashbaordLayout>
  );
};

export default New;
