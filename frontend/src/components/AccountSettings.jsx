import { Box, Typography, Paper, Card, CardContent, CardMedia } from "@mui/material";
import { Australia, France, Turkey, Venice } from "../assets/images";

const recentTrips = [
  {
    destination: "Italy",
    dates: "June 10 - June 20, 2023",
    highlights: "Visited Rome, Florence, and Venice",
    image: Venice, // Replace with actual image path
  },
  {
    destination: "Australia",
    dates: "December 15 - December 25, 2022",
    highlights: "Sydney, Great Barrier Reef",
    image: Australia, // Replace with actual image path
  },
];

export const AccountSettings = () => {
  return (
    <Box className="flex flex-col space-y-4 p-4">
      <Typography variant="h5" className="font-bold mb-4">
        Recent Trips
      </Typography>
      {recentTrips.map((trip, index) => (
        <Card key={index} className="flex flex-col md:flex-row shadow-md">
          <CardMedia
            component="img"
            alt={trip.destination}
            image={trip.image}
            title={trip.destination}
            className="h-[20rem]"
          />
          <CardContent className="flex flex-col justify-between">
            <Typography variant="h6" className="font-semibold">
              {trip.destination}
            </Typography>
            <Typography variant="subtitle2" className="text-gray-500">
              {trip.dates}
            </Typography>
            <Typography variant="body2" className="mt-2">
              {trip.highlights}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
