import React from "react";
import gallery from "../images/gallery.png";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const GalleryDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data } = useFetch(`https://api.nanocodes.com.ng/gallery/${id}`);
  console.log(data);
  let title, about, image, user, views;
  if (data !== null) {
    ({ title, about, image, views ,user} = data);
  }
   let  userName;
   if (user !== undefined) {
    ({ username: userName } = user);
  
  }
  return (
    <Layout>
      <div className="my-[9rem]" >
      <div className="flex flex-col justify-center items-center text-white">
        <img src={`https://api.nanocodes.com.ng${image}`} alt="" className="h-[500px] w-[40%] object-cover rounded-md"/>
        <figure className="flex justify-between w-[40%] my-[2rem]">
          <span className="text-3xl font-bold">{title}
            <br />
          <span className="text-[18px] text-normal">  by {userName == ''? 'chinonso':userName} <ShareIcon /></span>
          </span>
          <small><VisibilityIcon/> {views}</small>
        </figure>
        <p className="w-[40%]">
          {about}
        </p>
      </div>
    </div>
    </Layout>
  );
};

export default GalleryDetails;
