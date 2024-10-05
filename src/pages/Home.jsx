import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import EventCard from "../components/EC";
import ServiceSection from "../components/ServiceSection";
import LoadingScreen from "../components/LoadingScreen";

const Home = () => {
  const [data, setData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    fetchEventData();
    fetchServiceData();
    setLoading(false);
  }, []);

  async function fetchEventData() {
    await fetch("/data/Events/EventDetails.json") // Leading slash for absolute path
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching the JSON file:", error);
        setError(error);
        setLoading(false);
      });
  }
  async function fetchServiceData() {
    await fetch("/data/Services/ServiceDetails.json") // Leading slash for absolute path
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setServiceData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching the JSON file:", error);
        setError(error);
        setLoading(false);
      });
  }

  if (loading) {
    return <div><LoadingScreen /></div>; // Display loading message
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
      <ServiceSection services={serviceData} />
    </>
  );
};

export default Home;