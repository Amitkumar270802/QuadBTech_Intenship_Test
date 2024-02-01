import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgCloseR } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  const [toggle, setToggle] = useState(1);

  return (
    <div className="bg-white relative sm:mb-20">
      <div className="w-9/12 mx-auto sm:hidden ">
        <div className="flex justify-between p-4 items-center ">
          <div className="flex">
            <div className="flex flex-col p-2">
              <h1 className="text-black text-xl font-bold ">
                <span className="text-2xl text-pink-600">E</span>ntertainment
              </h1>
              <div className="relative bg-gray-700 h-[2px]  flex justify-center rounded-full">
                <h1 className="absolute top-[-7px] text-center p-1 text-black text-[6px] bg-white  font-semibold">
                  made with love
                </h1>
              </div>
            </div>
          </div>
          <Link to="/" className="text-lg font-semibold text-[#246bfd]">
            Home
          </Link>
          <Link className="text-lg font-semibold">About Us</Link>
          <Link className="text-lg font-semibold">Contact Us</Link>
          <div className="flex p-2 items-center gap-x-4">
            <div className="relative sm:hidden md:hidden flex justify-center items-center xl:block">
              <CiSearch className="absolute left-4 top-2 text-gray-500" />
              <input
                type="search"
                placeholder="search movies here"
                className="text-lg capitalize border rounded-r-full  rounded-l-full outline-none pl-10 border-[#246bfd] h-[30px]"
              ></input>
            </div>
            <div className="text-[30px] text-[#246bfd] cursor-pointer">
              <IoIosNotificationsOutline />
            </div>
            <div className="rounded-full h-[40px] w-[40px] ">
              <img src="https://res.cloudinary.com/djum9l80v/image/upload/v1704834776/tpoyajwz3k6izjdmp5oq.png" />
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className=" w-screen mx-auto md:hidden bg-white fixed z-10">
        <div className="flex justify-between items-center p-4  ">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col p-2">
              <h1 className="text-black text-xl font-bold ">
                <span className="text-2xl text-pink-600">E</span>ntertainment
              </h1>
              <div className="relative bg-gray-700 h-[2px]  flex justify-center rounded-full">
                <h1 className="absolute top-[-7px] text-center p-1 text-black text-[6px] bg-white  font-semibold">
                  made with love
                </h1>
              </div>
            </div>
            <div
              className="text-2xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              <CgCloseR />
            </div>
          </div>
          <div className={`${toggle ? "hidden" : ""} relative md:hidden`}>
            <div className="z-10 flex flex-col fixed backdrop-blur-3xl  justify-center items-center text-left w-full top-20 left-0 h-screen gap-y-5 ">
              <Link
                onClick={() => setToggle(1)}
                to="/"
                className="text-lg font-semibold text-[#246bfd]"
              >
                Home
              </Link>
              <Link
                onClick={() => setToggle(1)}
                className="text-lg font-semibold"
              >
                About Us
              </Link>
              <Link
                onClick={() => setToggle(1)}
                className="text-lg font-semibold"
              >
                Contact Us
              </Link>
              <div className="flex p-2 items-center gap-x-4">
                <div className="relative sm:hidden md:hidden flex justify-center items-center xl:block">
                  <CiSearch className="absolute left-4 top-2 text-gray-500" />
                  <input
                    type="search"
                    placeholder="search exam here"
                    className="text-lg capitalize border rounded-r-full  rounded-l-full outline-none pl-10 border-[#246bfd] h-[30px]"
                  ></input>
                </div>
                <div className="text-[30px] text-[#246bfd] cursor-pointer">
                  <IoIosNotificationsOutline />
                </div>
                <div className="rounded-full h-[40px] w-[40px] ">
                  <img src="https://res.cloudinary.com/djum9l80v/image/upload/v1704834776/tpoyajwz3k6izjdmp5oq.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Header;
