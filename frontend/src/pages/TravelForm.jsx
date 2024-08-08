import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";
import { DynamicActivityForm } from "./activities";
// import './index.css';

export const TravelForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState("");
  const [sourceLocation, setSourceLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const travelData = { startDate, endDate, budget, currency, destinationLocation, activity };
    console.log(travelData);

    try {
      const response = await axios.post("http://localhost:5173/api/travel", travelData);
      console.log("Data saved:", response.data);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  // Sample data for dropdowns
  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "INR"];
  const locations = [
    "India",
    "New York",
    "London",
    "Paris",
    "Tokyo",
    "Sydney",
    "Dubai",
    "Rome",
    "Bangkok",
    "Singapore",
  ];

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="flex flex-grow w-full justify-center bg-transparent ">
          <div className="w-full max-w-[50%] bg-transparent px-5 py-5">
            <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-5 p-5 bg-transparent">
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
              <DatePicker
                label="End Date"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
              <TextField
                label="Budget"
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                fullWidth
              />
              <FormControl fullWidth>
                <InputLabel>Currency</InputLabel>
                <Select value={currency} label="Currency" onChange={(e) => setCurrency(e.target.value)}>
                  {currencies.map((curr) => (
                    <MenuItem key={curr} value={curr}>
                      {curr}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Destination Location</InputLabel>
                <Select
                  value={destinationLocation}
                  label="Destination Location"
                  onChange={(e) => setDestinationLocation(e.target.value)}
                >
                  {locations.map((loc) => (
                    <MenuItem key={loc} value={loc}>
                      {loc}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button type="submit" variant="contained" className="w-full bg-blue-500 hover:bg-blue-600">
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
      </LocalizationProvider>
      <DynamicActivityForm />
    </>
  );
};
