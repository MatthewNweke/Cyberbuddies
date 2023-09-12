import React from 'react';
import Course from '../components/OnlineData';
import DashbaordLayout from '../components/dashboard/DashbaordLayout';

const Online = () => {
  const coursesData = [
    {
      course: 'Web Development',
      link: 'http://localhost:3000/dashboard/settings',
      starts: '2023-07-08T16:18:47.163Z',
      ends: '2023-07-08T18:18:47.163Z',
    },
    {
      course: 'Data Science',
      link: 'http://localhost:3000/dashboard/settings',
      starts: '2023-07-09T16:18:47.163Z',
      ends: '2023-07-10T18:18:47.163Z',
    },
    {
      course: 'React js',
      link: 'http://localhost:3000/dashboard/settings',
      starts: '2023-07-09T16:18:47.163Z',
      ends: '2023-07-10T18:18:47.163Z',
    },
  ];

  return (
    <DashbaordLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {coursesData.map((courseData, index) => (
          <Course key={index} {...courseData} />
        ))}
      </div>
    </DashbaordLayout>
  );
};

export default Online;
