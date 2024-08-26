import React from "react";
import { Link } from "react-router-dom";
import { DiCodepen } from "react-icons/di";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-20 flex flex-row items-center md:justify-between md:border-none border-gray-300 border-b justify-between px-10">
        <div className="w-max flex flex-row items-center">
          <div
            className="text-3xl font-bold tracking-wide flex flex-row items-center hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span>
              <img src="https://avatars.githubusercontent.com/u/148284701?s=48&v=4" alt="uofr-csss-logo" className="mr-2 rounded-md h-10 w-10" />
            </span>
            <h1>UR CSSS</h1>
          </div>
          <div className="ml-1 text-gray-600 hidden md:flex">
            <Link className="ml-4" to="/about">
              About Us
            </Link>
            <Link className="ml-4" to="/code-of-conduct">
              Code of Conduct
            </Link>
            <Link className="ml-4" to="/events">
              Events
            </Link>
            <Link className="ml-4" to="/contact">
              Contact
            </Link>
            <Link className="ml-4" to="/elections">
              Elections
            </Link>
          </div>
        </div>
        <div className="md:hidden flex flex-row items-center">
          <button className="px-2 py-1 border bordery-gray-200 rounded-md">
            <IoMenuSharp className="text-2xl" />
          </button>
        </div>
        <div className="w-max-c hidden md:flex">
          <input
            type="text"
            placeholder="Search"
            className="py-1 px-2 text-sm border-black border-b outline-none"
          />
          <button className="ml-2">
            <IoSearch className="text-lg" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
