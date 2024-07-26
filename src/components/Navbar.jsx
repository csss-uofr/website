import React from 'react';
import { Link } from 'react-router-dom';
import { DiCodepen } from "react-icons/di";
import { IoSearch } from "react-icons/io5";


const Navbar = () => {
    return (
        <>
        <div className="w-full h-20 flex flex-row items-center md:justify-between md:border-none border-gray-300 border-b justify-center px-10">
<div className=
"w-max flex flex-row items-center">
    <div className="text-3xl font-bold tracking-wide flex flex-row items-center">
        <span><DiCodepen className="text-5xl" /></span>
        <h1>UR CSSS</h1>
        </div>
    <div className="ml-1 text-gray-600 hidden md:flex">
        <Link className="ml-4" to="/about">About Us</Link>
        <Link className="ml-4" to="/events">Events</Link>
        <Link className="ml-4" to="/contact">Contact</Link>
        <Link className="ml-4" to="/elections">Elections</Link>
    </div>
</div>
<div className="w-max-c hidden md:flex">
    <input type="text" placeholder="Search" className="py-1 px-2 text-sm border-black border-b outline-none" />
    <button className="ml-2"><IoSearch className="text-lg" /></button>
</div>
        </div>
        </>
    );
};

export default Navbar;
