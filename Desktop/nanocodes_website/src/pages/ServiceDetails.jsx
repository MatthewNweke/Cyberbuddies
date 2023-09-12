import React from 'react';
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
import Layout from '../components/Layout';
import { API_URL } from '../constants/api';

const ServiceDetails = () => {
  // const { id } = useParams();
  const queryId = useLocation();
  const { data } = useSWR(`${API_URL}/service/${queryId?.search?.slice(1)}`);
  // console.log(data);

  return (
    <Layout>
      <div className="my-[90px]">
        <figure className="w-[80%] m-auto">
          <h1 className="text-center font-bold text-white md:text-5xl text-2xl pt-[2rem] mb-[2rem]">
            {data?.title}
          </h1>
          <img
            src={`${data?.image}`}
            alt=""
            className="w-full rounded-md h-[300px] object-cover"
          />
          <p className="md:p-[2rem] md:pl-0 p-[1rem] text-white text-base md:text-lg">
            {data?.description}
          </p>
          <p className="md:p-[2rem] md:pl-0 p-[1rem] text-white text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            maxime iste velit, accusantium maiores totam quaerat reprehenderit
            facilis. Eveniet possimus facilis iste cum quod tempore illum fugit
            officiis ut molestias? lorem1000
          </p>
        </figure>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
