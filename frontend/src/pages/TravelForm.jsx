import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export const TravelForm = () => {
  const [activities, setActivities] = useState([]);
  const [activityName, setActivityName] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [activityTime, setActivityTime] = useState("");

  // Fetch activities from the API
  const fetchActivities = async () => {
    try {
      const response = await axios.get("http://localhost:8080/activities");
      setActivities(response.data);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const handleAddActivity = async () => {
    if (activityName && activityDate && activityTime) {
      const newActivity = {
        name: activityName,
        description: activityDescription,
        date: activityDate,
        time: activityTime,
      };

      try {
        const response = await axios.post("http://localhost:8080/activities", newActivity);
        fetchActivities();
        clearForm();
      } catch (error) {
        console.error("Error adding activity:", error);
      }
    } else {
      window.alert("Enter all details!");
    }
  };

  const handleDeleteActivity = async (index) => {
    const activityToDelete = activities[index];

    try {
      await axios.delete(`http://localhost:8080/activities/${activityToDelete.id}`);
      fetchActivities();
    } catch (error) {
      console.error("Error deleting activity:", error);
    }
  };

  const clearForm = () => {
    setActivityName("");
    setActivityDescription("");
    setActivityDate("");
    setActivityTime("");
  };

  return (
    <Box className="flex h-screen p-4">
      <Box className="flex-1 mr-4 min-h-[10rem]">
        <Typography variant="h5" className="font-bold mb-4 p-3">
          Activities List
        </Typography>
        <Paper elevation={3} className="p-4">
          <List>
            {activities.length ? (
              activities.map((activity, index) => (
                <ListItem key={index} className="bg-gray-100 mb-2 p-2 rounded">
                  <ListItemText
                    primary={activity.name}
                    secondary={
                      <>
                        <Typography variant="body2">{activity.description}</Typography>
                        <Typography variant="body2">
                          {activity.date} at {activity.time}
                        </Typography>
                      </>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteActivity(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            ) : (
              <>
                <h2 className="font-bold text-gray-700 tracking-wider px-5">No activities added</h2>
              </>
            )}
          </List>
        </Paper>
      </Box>

      <Box className="w-1/3">
        <Typography variant="h5" className="font-bold mb-4 p-3">
          Create New Activity
        </Typography>
        <Paper elevation={3} className="p-4 grid gap-5">
          <TextField
            label="Activity Name"
            variant="outlined"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            fullWidth
            className="mb-2"
          />
          <TextField
            label="Description"
            variant="outlined"
            value={activityDescription}
            onChange={(e) => setActivityDescription(e.target.value)}
            fullWidth
            className="mb-2"
            multiline
            rows={3}
          />
          <TextField
            label="Date"
            type="date"
            variant="outlined"
            value={activityDate}
            onChange={(e) => setActivityDate(e.target.value)}
            fullWidth
            className="mb-2"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Time"
            type="time"
            variant="outlined"
            value={activityTime}
            onChange={(e) => setActivityTime(e.target.value)}
            fullWidth
            className="mb-2"
            InputLabelProps={{ shrink: true }}
          />
          <Button variant="contained" onClick={handleAddActivity} fullWidth>
            Add Activity
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};
