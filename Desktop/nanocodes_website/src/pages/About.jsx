import React from "react";
import Counter from "../components/Counter";
import Layout from "../components/Layout";
import Team from "../components/Team";
import WhatWeDo from "../components/WhatWeDo";
import Who from "../components/Who";

const About = () => {
  return (
    <Layout>
      <div className="mt-[80px]">
        <div className="text-center p-[2rem] md:w-[80%] w-full text-white m-auto">
          <h2 className="text-center text-2xl font-bold my-[2rem]">About Us</h2>
          <p className="my-[1rem]">
            The idea of Nanocodes stemmed up from an adventure of a young
            programmer who was in tune with the skill of programming in the year
            2020. After having mastered the art of programming in the field of
            web development, he started with contracts and jobs from clients.
          </p>
          <p className="my-[1rem]">
            Back then, it was interesting that his first fully built website for
            a client was a 'News Site'. And after having been paid by the client
            (even though it was a little amount then), he was encouraged and
            motivated to continue going the way of programming. This continued
            as he handled more and more projects. He got so good that he began
            to tutor and mentor students in programming.
          </p>
          <p className="my-[1rem]">
            And having been recognized in this field, more and more prospective
            students kept on coming to him for tutoring and mentoring. More and
            more people kept on coming, and he was using his apartment as the
            training centre. This continued until his very good friend Ukachukwu
            Sonia suggested that he should go bigger; that he should consider
            getting a centre which will be able to contain the students and
            serve them better. He took the suggestion. Plans were made and
            Nanocodes was born!
          </p>
        </div>
        <div id="who">
          <Who />
        </div>
        <Counter />
        <WhatWeDo />
        <div className="flex items-center flex-wrap justify-between w-[80%] m-auto gap-16 my-[5rem]">
          <aside className="text-center text-white">
            <h2 className="font-bold uppercase text-2xl my-[1rem]">Mission</h2>
            <p>
              To use the resources and materials that our immediate environment
              presents to build a society and a country where we have smart
              cities and technologically driven infrastructures. Starting with
              tech enlightenment and coaching of society as well as providing
              services and tech products and devices to the populace. Through
              which the society will gradually evolve to that standpoint where
              tech will be in the sectors where it should be.
            </p>
          </aside>
          <aside className="text-center text-white">
            <h2 className="font-bold uppercase text-2xl my-[1rem]">vission</h2>
            <p>
              Nanocodes Programming aims at using technology to build the
              country and the society; by harnessing the rich resources that the
              society presents.
            </p>
          </aside>
        </div>
        <div id="team">
          <Team />
        </div>
      </div>
    </Layout>
  );
};

export default About;
