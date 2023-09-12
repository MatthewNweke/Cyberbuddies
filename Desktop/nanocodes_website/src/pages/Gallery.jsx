import { Search } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import useSWR from 'swr';
import GalleryCard from '../components/GalleryCard';
import Layout from '../components/Layout';
import { API_URL } from '../constants/api';

const Gallery = () => {
  // const { data, loading } = useFetch('https://api.nanocodes.com.ng/gallery/');
  const { data, error } = useSWR(`${API_URL}/courses`);
  console.log('gallery', error);

  return (
    <div>
      <Layout>
        <div className="mt-[90px]">
          <h2 className="text-center text-4xl font-bold text-white m-[2rem]">
            Gallery
          </h2>

          <div className=" flex justify-center">
            <TextField
              placeholder="Search Name, Location, etc"
              className="bg-white md:w-[50%] w-4/5 mx-auto rounded-lg"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="End">
                    <IconButton>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <GalleryCard data={data} loading={error} />
        </div>
      </Layout>
    </div>
  );
};

export default Gallery;
