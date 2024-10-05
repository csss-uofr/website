import React from 'react';
import { useState, useEffect } from 'react';
import EventCard from '../components/EC';
import LoadingScreen from '../components/LoadingScreen';
// import eventsData from '../data/events';
// import EventCard from '../components/EventCard'; 


// TODO:
// - Add events data in events.md File
// - parse and display the data in Events.jsx

const Events = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    fetch("/data/Events/EventDetails.json") // Leading slash for absolute path
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the JSON file:", error);
        setError(error);
        setLoading(false);
      });
  }, []);
  

  if (loading) {
    return <div><LoadingScreen/></div>; // Display loading message
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display error message
  }
    return (
        <div className="container h-max-c min-h-[calc(100vh-28vh)] mx-auto py-8">
            <div className='px-4'>
            <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
            </div>
            <div className="px-4">
                <EventCard data={data} />
            </div>
        </div>
    );
};

export default Events;
