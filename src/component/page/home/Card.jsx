import React from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  let data = props.data;
  return (
    <div className="flex  mx-auto ">
      <div className="flex justify-center gap-5 items-center mx-auto m-4">
        {data &&
          data.map((item, key) => (
            <div
              className="shadow-slate-200 shadow-lg bg-white rounded-xl bg-smoke p-4 flex  flex-col h-[300px] sm:w-[300px] w-[332px]  "
              key={key}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div className="flex items-center justify-between ">
                <div className="flex justify-between items-center  p-1">
                  <div className="h-[150px] w-[150px]  p-1 rounded-lg ">
                    <img src={item.show.image && item.show.image.original}  className="w-[180px] h-[180px]"/>
                  </div>
                  <div className="flex flex-col items-start justify-start p-1 m-2 text-left">
                    <h4 className="font-bold text-lg">{item.show.name}</h4>
                    <h6 className="text-gray-400 text-[14px]">
                      Premiered on : {item.show.premiered}
                    </h6>
                    <h6 className="text-gray-400 text-[14px]">
                      Language : {item.show.language}
                    </h6>
                    <h6 className="text-gray-400 text-[14px]">
                      Type : {item.show.type}
                    </h6>
                    <h6 className="text-gray-400 text-[14px]">
                      Rating : {item.show.rating.average}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="mt-9">
                <div className="flex justify-start gap-x-3 ">
                  {item.show.genres &&
                    item.show.genres.map((item, key) => (
                      <div
                        className="text-white p-1 w-20 text-sm rounded-3xl bg-blue-600"
                        key={key}
                      >
                        {item}
                      </div>
                    ))}
                </div>
              </div>
              <Link
                to={`/movie/${key}`}
                className="bg-red-500 text-white p-1 rounded-lg mt-4 "
              >
                View
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
