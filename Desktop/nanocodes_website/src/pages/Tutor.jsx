import React from "react";
import Layout from "../components/Layout";
import people from "../images/people .png";
import { BsPerson } from "react-icons/bs";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { useParams } from "react-router-dom";

const Tutor = () => {
  const {id} = useParams()
  console.log(id);
  return (
    <Layout>
      <figure className="mt-[7rem] min-h-[100vh] ">
        <div className="flex items-start justify-between rounded-md bg-[black] w-4/5 h-[500px] m-auto text-white p-[1rem]">
          <aside className="basis-[32%]">
            <p className="font-bold text-5xl">Alma Hedegaard</p>
            <div className="grid grid-cols-2 m-[1.5rem]">
                <aside className="my-[1rem]">
                    <WorkOutlineIcon className="text-2xl"/>
                    <p>Occupation</p>
                    <p>Sales Manager</p>
                </aside>
                <aside className="my-[1rem]">
                    <LocationOnIcon className="text-2xl"/>
                    <p>Location</p>
                    <p>Hilltop Nsukka </p>
                </aside>
               
                <aside className="my-[1rem]">
                    <BsPerson className="text-2xl"/>
                    <p>Age</p>
                    <p>22 </p>
                </aside>
               
            </div>
          </aside>
          <aside className="basis-[32%]">
            <h2 className="text-3xl font-bold py-[2rem] capitalize">biography</h2>
            <p>
              Alma and her husband have 2 kids: a teenager and a 9-year-old. Now
              they can focus more on their carreers but their main worry is
              about their sons education and health. With a busy week days, the
              time they can really get togther as a family is during the dinners
              time and weekends. So their meal is a really special part of their
              days. She loves to use avocados in her diet. Interested in
              gardening.
            </p>
            <h2 className="text-3xl font-bold py-[1rem] capitalize">Hobbies</h2>
            <ul>
                <li>coding </li>
                <li>Gaming</li>
            </ul>
          </aside>
          <aside className="h-full basis-[32%]">
            <img
              src={people}
              alt=""
              className="h-full w-full rounded-md object-cover"
            />
          </aside>
        </div>
      </figure>
    </Layout>
  );
};

export default Tutor;
