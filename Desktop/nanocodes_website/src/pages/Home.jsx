import React from "react";
import Counter from "../components/Counter";
import Journey from "../components/Journey";
import LadyForm from "../components/LadyForm";
import Layout from "../components/Layout";
import Nano from "../components/Nano";

import ServiceCard from "../components/ServiceCard";
import SwiperCard from "../components/SwiperCard";
import Who from "../components/Who";
import Wrapper from "../components/Wrapper";
import New from "./New";



const Home = () => {
  return (
    <Layout>
      <Wrapper />
      <Who />
      <ServiceCard />
      {/* <SwiperCard /> */}
      <Journey />
      <LadyForm />
      <Nano />
      <Counter/>
    </Layout>
  );
};

export default Home;
