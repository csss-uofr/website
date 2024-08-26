import React from "react";
import { Link } from "react-router-dom";


const EventCard = ({ data }) => {
  console.log(data)
  return (
    <>
      <div className="bg-white">
        <div className="">
          <div className="flex flex-col w-full h-max overflow-y-auto overflow-x-hidden lg:flex-row lg:flex-wrap lg:wrap xl:justify-start lg:justify-center">
            {data.map((post) => (
              <div className="mt-8 lg:mr-12 flex flex-col sm:flex-row lg:flex-col lg:max-w-80 border border-gray-400 rounded-md shadow-md">
                <img src={post.thumbnailUrl} alt="thumbnail" className="h-full w-full sm:h-44 w-44 lg:w-80 lg:h-80 rounded-sm" />
                <div className="bg-white lg:max-w-96 w-full rounded-md px-2 py-2">
                  <h5 className="text-lg text-blue-400 hover:underline sm:text-xl">{post.title}</h5>
                  <p className="text-gray-500 tracking-wide hidden sm:block sm:mt-1">{post.description}</p>
                  <p className="mt-1 sm:mt-2 text-gray-600">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full justify-center flex flex-row py-12 text-center">
            <p>Have a suggested event or initiative in mind? Send it our way <Link to="mailto:devp61136@gmail.com" className="text-blue-400 hover:underline">here.</Link></p>
        </div>
      </div>
    </>
  );
};

export default EventCard;
