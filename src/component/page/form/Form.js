import React from "react";
import { useParams } from "react-router-dom";

const Form = (props) => {
  const { key } = useParams();
  const data = props.data[key];
  // console.log(props.data[key]);
  // console.log(key);
  return (
    <div className="mt-8 min-h-[400px] ">
      <div className="flex justify-center items-center">
        <form
          className="w-4/12 flex flex-col justify-center items-center "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex w-full mb-5 ">
            <label className="text-left  items-center flex text-sm text-gray-500  w-full ">
              Movie Name
            </label>
            <p className="py-2.5 px-2 w-full text-sm text-gray-900 border-2 border-gray-300 ">
              {data.show.name}
            </p>
          </div>
          <div className="flex  w-full mb-5 ">
            <label className="text-left  items-center flex text-sm text-gray-500  w-full ">
              Show Time
            </label>
            <p className="h-10 px-2 w-full text-sm text-gray-900 border-2 border-gray-300 ">
              {data.show.schedule.time}
            </p>
          </div>
          <div className="flex w-full  mb-5 ">
            <label className="text-left  items-center flex text-sm text-gray-500  w-full ">
              Name
            </label>
            <input
              type="text"
              className="py-2.5 px-2 capitalize w-full text-sm text-gray-900 border-2 border-gray-300 "
              placeholder=" "
              required
            />
          </div>
          <div className="flex  w-full mb-5 ">
            <label className="text-left  items-center flex text-sm text-gray-500  w-full ">
              Contact Number
            </label>
            <input
              type="number"
              className="py-2.5 px-2  w-full text-sm text-gray-900 border-2 border-gray-300 "
              placeholder=" "
              required
            />
          </div>
          <div className="flex  w-full mb-5 ">
            <label className="text-left  items-center flex text-sm text-gray-500  w-full ">
              Total Seats
            </label>
            <input
              type="number"
              className="py-2.5 px-2  w-full text-sm text-gray-900 border-2 border-gray-300 "
              placeholder=" "
              required
            />
          </div>
          <div className="flex  w-full mb-5 ">
            <label className="text-left  items-center flex text-sm text-gray-500  w-full ">
              Date 
            </label>
            <input
              type="date"
              className="py-2.5 px-2  w-full text-sm text-gray-900 border-2 border-gray-300 "
              placeholder=" "
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800  rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
