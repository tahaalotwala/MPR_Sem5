import React, { useState } from "react";



export const TravelDestination = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(""); 

  // Filter destinations based on search input
  // const filteredDestinations = destinations.filter((destination) =>
  //   destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="flex">
      {/* Left Side - Search and Filter */}
      <div className="w-1/3 p-4 border-r">
        <h2 className="text-2xl font-semibold mb-4">Search Destinations</h2>
        <input
          type="text"
          placeholder="Search by destination..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <h3 className="text-xl font-semibold mb-2">Filter</h3>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border rounded bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="" >---Select a category---</option> 
          <option value="hotels">Hotels</option>
          <option value="restaurants">Restaurants</option>
          <option value="attractions">Attractions</option>
        </select>
      </div>

      {/* Right Side - Map */}
      <div className="w-2/3 p-4">
        <h2 className="text-2xl font-semibold mb-4">Map</h2>
        {/* Placeholder for the map */}
        <div className="h-96 bg-gray-300 rounded">
          {/* You can replace this div with your map component */}
          <p className="text-center pt-40">Map will be displayed here</p>
        </div>
      </div>
    </div>
  );
};
