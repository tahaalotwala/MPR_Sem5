import { Box, Typography, Paper } from "@mui/material";
import { format } from "date-fns";

const events = [
  {
    date: "2023-10-01",
    title: "Trip to Paris",
    description: "Visited the Eiffel Tower and Louvre Museum.",
  },
  {
    date: "2023-09-15",
    title: "Weekend in Tokyo",
    description: "Enjoyed sushi and visited Shibuya Crossing.",
  },
  {
    date: "2023-08-05",
    title: "Road Trip to Yosemite",
    description: "Hiked in Yosemite National Park.",
  },
];

export const Timeline = () => {
  return (
    <>
      <Box className="flex flex-col space-y-4 p-4">
        {events.map((event, index) => (
          <Paper
            key={index}
            elevation={3}
            className="flex flex-col p-4 shadow-md transition-transform transform hover:scale-105"
          >
            <Typography variant="h6" className="font-bold">
              {event.title}
            </Typography>
            <Typography variant="subtitle2" className="text-gray-500">
              {format(new Date(event.date), "MMMM d, yyyy")}
            </Typography>
            <Typography variant="body1" className="mt-2">
              {event.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </>
  );
};
