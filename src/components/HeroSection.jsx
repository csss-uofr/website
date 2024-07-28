import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="container flex flex-col justify-center h-80 border-gray-300 border-b py-4">
        <div className="flex flex-row w-full justify-center text-center">
          <h2 className="text-xl md:text-4xl 2xl:text-7xl xl:text-6xl font-bold">
            UR Computer Science Student Society
          </h2>
        </div>
        <div className="mt-6 text-center">
          <p>
            Welcome to the Computer Science Student Society, the student club
            for undergraduates at the <Link className="text-blue-500 hover:underline" to="#">University of Regina Department of Computer Science </Link>. We
            provide a social space where everyone’s welcome, run
            events, and represent your interests to the department. For more
            events you may be interested in, please follow us on our social
            media outlets. Join us on  <Link className="text-blue-500 hover:underline" to="#">Discord </Link> or <Link className="text-blue-500 hover:underline" to="#"> Instagram!</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
