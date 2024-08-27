import React, {useEffect, useState} from "react";
import ElectionCard from "../components/ElectionCard";

// TODO:
// - add previous elections results in election-results.md
// - parse and display the data in Elections.jsx


const Elections = () => {
  const [data, setData] = useState([]);
  const [candidatesData, setCandidatesData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    fetch("/data/Elections/2024.json") // Leading slash for absolute path
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setCandidatesData(jsonData.candidates);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the JSON file:", error);
        setError(error);
        setLoading(false);
      });
  }, []);
  

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display error message
  }
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-3xl font-bold mb-4 pb-4 border-b border-gray-200">Elections {data.year}</h1>
                <ElectionCard candidatesData={candidatesData} />
      </div>
    </div>
  );
};

export default Elections;
