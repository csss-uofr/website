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
      <div className="w-full h-20 flex flex-row items-center md:justify-between lg:border-none border-gray-300 border-b justify-between px-10">
        <div className="w-max flex flex-row items-center">
          <div
            className="text-3xl font-bold tracking-wide flex flex-row items-center hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span>
              <img src="https://avatars.githubusercontent.com/u/148284701?s=48&v=4" alt="uofr-csss-logo" className="mr-2 rounded-md h-10 w-10" />
            </span>
            <h1 className="fira italic flex flex-col">CSSS
              <span className="text-xs text-gray-500">University of Regina</span>
            </h1>
          </div>
          <div className="ml-1 text-gray-600 hidden lg:flex fira text-green-600">
            <Link className="ml-4 hover:bg-green-600 hover:text-white p-2 rounded-md" to="/about">
               {`<`}About Us{`/>`}
            </Link>
            <Link className="ml-4 hover:bg-green-600 hover:text-white p-2 rounded-md" to="/code-of-conduct">
              {`<`}Code of Conduct{`/>`}
            </Link>
            <Link className="ml-4 hover:bg-green-600 hover:text-white p-2 rounded-md" to="/events">
              {`<`}Events{`/>`}
            </Link>
            <Link className="ml-4 hover:bg-green-600 hover:text-white p-2 rounded-md" to="/contact">
              {`<`}Contact{`/>`}
            </Link>
            <Link className="ml-4 hover:bg-green-600 hover:text-white p-2 rounded-md" to="/elections">
              {`<`}Elections{`/>`}
            </Link>
          </div>
        </div>
        <div className="lg:hidden flex flex-row items-center">
          <button className="px-2 py-1 border bordery-gray-200 rounded-md">
            <IoMenuSharp className="text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
