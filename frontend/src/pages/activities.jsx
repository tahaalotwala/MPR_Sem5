import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export const DynamicActivityForm = () => {
  const [activities, setActivities] = useState([{ activityName: "", activityDate: null, activityPlace: "" }]);

  const handleActivityChange = (index, field, value) => {
    const updatedActivities = [...activities];
    updatedActivities[index][field] = value;
    setActivities(updatedActivities);
  };

  const handleAddActivity = () => {
    setActivities([...activities, { activityName: "", activityDate: null, activityPlace: "" }]);
  };

  const handleRemoveActivity = (index) => {
    const updatedActivities = [...activities];
    updatedActivities.splice(index, 1);
    setActivities(updatedActivities);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex flex-col justify-center w-full bg-transparent">
        <div className="flex flex-col justify-center items-center py-5 bg-transparent">
          <div className="flex flex-col w-full p-5 max-w-full lg:max-w-[60%] xl:max-w-[50%] bg-transparent">
            {activities.map((activity, index) => (
              <Box key={index} className="flex flex-col w-full min-w-[50%] space-y-4 bg-transparent">
                <TextField
                  label="Activity Name"
                  value={activity.activityName}
                  onChange={(e) => handleActivityChange(index, "activityName", e.target.value)}
                  fullWidth
                  className="text-sm md:text-base"
                />
                <DatePicker
                  label="Activity Date"
                  value={activity.activityDate}
                  onChange={(newValue) => handleActivityChange(index, "activityDate", newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth className="text-sm md:text-base" />}
                />
                <TextField
                  label="Activity Place"
                  value={activity.activityPlace}
                  onChange={(e) => handleActivityChange(index, "activityPlace", e.target.value)}
                  fullWidth
                  className="text-sm md:text-base"
                />
                <div className="py-5">
                  <Button
                    onClick={() => handleRemoveActivity(index)}
                    variant="contained"
                    color="error"
                    className="w-full"
                  >
                    <RemoveCircleIcon />
                    Remove Activity
                  </Button>
                </div>
              </Box>
            ))}
            <Button
              onClick={handleAddActivity}
              variant="contained"
              className="flex flex-col justify-center w-full sm:w-auto bg-blue-500 hover:bg-blue-600"
            >
              <AddCircleIcon />
              Add Activity
            </Button>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};
