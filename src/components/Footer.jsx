import React from "react";
import { DiCodepen } from "react-icons/di";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center py-12 border-t border-gray-400">
        <div className="flex-row flex px-6 py-4">
          <DiCodepen className="text-5xl lg:text-7xl" />
        </div>
        <div className="flex-row flex justify-left px-8">
          <div className="flex-col flex">
            <h4 className="text-xl font-bold mb-1">Resources</h4>
            <Link className="text-sm text-gray-700 hover:underline hover:cursor-pointer">Events</Link>
            <Link className="text-sm text-gray-700 hover:underline hover:cursor-pointer">Resource</Link>
            <Link className="text-sm text-gray-700 hover:underline hover:cursor-pointer">Partners</Link>
          </div>
          <div className="flex-col flex ml-20 sm:ml-24">
          <h4 className="text-xl font-bold mb-1">About</h4>
            <Link className="text-sm text-gray-700 hover:underline hover:cursor-pointer">Core Executives</Link>
            <Link className="text-sm text-gray-700 hover:underline hover:cursor-pointer">Officers</Link>
            <Link className="text-sm text-gray-700 hover:underline hover:cursor-pointer">Volunteer</Link>
            <Link className="text-sm text-gray-700 hover:underline hover:cursor-pointer">Meeting Minutes </Link>
            <Link className="text-sm text-gray-700 hover:underline hover:cursor-pointer">Suggestion Box</Link>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-8 mb-2 md:px-4">
          <p className="text-sm font-bold text-center">
            &copy; {new Date().getFullYear()} Computer Science Students Society,
            University of Regina. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
