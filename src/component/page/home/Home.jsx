import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./Card";

const Home = (props) => {
  const data = props.data;
  return (
    <div className="w-9/12 mx-auto p-5 ">
      <div className="flex flex-col items-start mt-4 p-2" data-aos="fade-up">
        <div className="relative w-full ">
          <div className="overflow-auto scroll-smooth">
            <Card data={data} />
          </div>
          <div className="bg-slate-100 w-screen h-[40px] absolute bottom-[-10px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
