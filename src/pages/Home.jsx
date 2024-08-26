import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import EventCard from "../components/EC";
import ServiceSection from "../components/ServiceSection";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching the JSON file:", error);
        setError(error); // Set error state
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display error message
  }

  return (
    <>
      <HeroSection />
      <div className="flex flex-col items-center lg:mx-0 mt-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Recent Events
        </h2>
      </div>
      <EventCard data={data} />
      <ServiceSection />
    </>
  );
};

export default Home;
