import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const MovieDetails  = (props) => {
  const { key } = useParams();
  const data = props.data[key];
  // console.log(props.data[key]);
  // console.log(key);
  return (
    <div className="w-screen overflow-x-hidden" data-aos="fade-up">
      <div className="w-9/12 mx-auto">
        {/* back button */}
        <div className="flex p-4">
          <div>
            <Link to="/">
              <div className="flex gap-x-4 justify-center items-center hover:scale-105 hover:text-[#246bfd]">
                <div className="text-xl  ">
                  <FaArrowLeft />
                </div>
                <p className="text-xl ">Back</p>
              </div>
            </Link>
          </div>
        </div>

        {/* 2 part  */}
        <div className="flex flex-wrap justify-center ">
          <div className="lg:w-9/12 p-4 ">
            <div className="flex flex-col h-fit gap-y-5   ">
              <div
                className=" bg-white rounded-xl p-4 flex flex-col shadow-sm shadow-gray-500  "
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="relative flex sm:flex-col  ">
                  <div className=" flex flex-col justify-center p-1 rounded-lg  ">
                    <img
                      src={data.show.image && data.show.image.medium}
                      className="h-[300px] w-[300px] rounded-xl sm:w-[200px] sm:w-[200px]"
                    />
                    <div className="flex justify-between items-center  p-1">
                      <div className="flex flex-col items-start p-2  ">
                        <h6 className="text-white text-sm bg-red-500 w-8/12 rounded-md">
                          Rating : {data.show.rating.average}
                        </h6>
                        <h6 className=" text-black text-sm">
                          Language : {data.show.language}
                        </h6>
                        <h6 className="text-[14px]">
                          Day : {data.show.schedule.days}
                        </h6>

                        <h6 className="text-gray400 text-[14px]">
                          Time : {data.show.schedule.time}
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:w-8/12 lg:w-8/12 ml-8 ">
                    <div className="relative">
                      <h4 className="font-bold text-xl ">{data.show.name}</h4>
                      <h4 className="text-justify">{data.show.summary}</h4>
                      <Link  to={`/form/${key}`}>
                        <div className="bg-red-500  absolute  w-full bottom-0 p-1  mt-4 sm:p-1 md:p-2 m-2  rounded-lg cursor-pointer hover:scale-105 hover:font-bold shadow-md shadow-black text-white">
                          Book Ticket
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="p-4 lg:w-5/12  "
            data-aos="zoom-in"
            data-aos-duration="1000"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails ;
