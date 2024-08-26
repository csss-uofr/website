import React from "react";
import { DiCodepen } from "react-icons/di";
import { Link } from "react-router-dom";
import Logo from "../CSSS Logo.png";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center py-12 border-t bg-black text-gray-500 border-gray-400 fira">
        <div className="flex-row flex px-6 py-4">
          {/* <DiCodepen className="text-5xl lg:text-7xl" /> */}
          <img src={Logo} alt="uofr-csss-logo" className="mr-2 rounded-md h-16 lg:w-full w-max" />
        </div>
        <div className="flex-row flex justify-left px-8">
          <div className="flex-col flex">
            <h4 className="text-xl text-green-600 fira font-bold mb-1">Resources</h4>
            <Link className="text-sm text-gray-500 hover:underline hover:cursor-pointer" to="/events">Events</Link>
            <Link className="text-sm text-gray-500 hover:underline hover:cursor-pointer" to="/elections">Elections</Link>
            <Link className="text-sm text-gray-500 hover:underline hover:cursor-pointer" to="/contact">Contact</Link>
          </div>
          <div className="flex-col flex ml-20 sm:ml-24">
          <h4 className="text-xl text-green-600 fira font-bold mb-1">About</h4>
            <Link className="text-sm text-gray-500 hover:cursor-not-allowed">Core Executives</Link>
            <Link className="text-sm text-gray-500 hover:underline hover:cursor-pointer" to="/code-of-conduct">Code of Conduct</Link>
            <Link className="text-sm text-gray-500 hover:underline hover:cursor-pointer" to="/about">About Us</Link>
            <Link className="text-sm text-gray-500 hover:underline hover:cursor-pointer" to="/contact">Suggestion Box</Link>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-8 mb-2 md:px-4">
          <p className="text-sm font-bold text-center">
            &copy;{new Date().getFullYear()} Computer Science Students Society,
            University of Regina. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
