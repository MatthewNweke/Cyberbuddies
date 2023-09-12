import React from "react";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import {
  BsFillTelephoneFill,
  BsWhatsapp,
  BsFacebook,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <figure className="mt-[7rem] min-h-[100vh]">
        <h2 className="font-bold text-3xl text-white text-center m-[2rem]">
          Contact us
        </h2>
        <div className=" text-white w-4/5 p-[1rem] m-auto flex md:flex-row flex-col-reverse justify-around">
          <aside className="basis-[40%]">
            <p className="flex items-center  text-xl mb-6">
              {" "}
              <BsFillTelephoneFill />
              +2347012345678
            </p>
            <p className="flex items-center text-xl  mb-6">
              {" "}
              <BsWhatsapp />
              +2348133306121
            </p>
            <p className="flex items-center text-xl  mb-6">
              {" "}
              <HiLocationMarker /> Opp. St. Theresa Cathederal, Nsukka, Enugu
              Rd. Enugu state.
            </p>
            <p className="flex items-center text-xl  mb-6">
              {" "}
              <FaRegEnvelope />
              <a href="mailto:support@nanocodes.com.ng">
                {" "}
                Support@nanocodes.com
              </a>
            </p>
            <p className="flex    font-bold text-xl ">
              <a href="https://www.facebook.com/nanocodes?mibextid=LQQJ4d">
                <BsFacebook className="mx-[0.5rem]" />{" "}
              </a>
              <a href="">
                <BsTwitter className="mx-[0.5rem]" />{" "}
              </a>

              <a href="https://www.instagram.com/nano_codes/?igshid=MzRlODBiNWFlZA%3D%3D">
                <BsInstagram className="mx-[0.5rem]" />
              </a>
            </p>
          </aside>
          <aside className="basis-[50%] mb-[1rem] ">
            <ContactForm className="w-full" />
          </aside>
        </div>
      </figure>
    </Layout>
  );
};

export default Contact;
