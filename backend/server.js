import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./db/db_connect.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import itineraryRoutes from "./routes/itinerary.route.js";

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

let activities = [];
let id = 0;
app.post("/activities", (req, res) => {
  activities.push({ ...req.body, id: id++ });
  res.json({ success: true, data: req.body });
});
app.get("/activities", (req, res) => {
  res.json(activities);
});
app.delete("/activities/:id", (req, res) => {
  const id = req.params.id;
  activities = activities.filter((act, idx) => {
    return act.id != id;
  });
  res.json({ success: true });
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/itineraries", itineraryRoutes);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port ${PORT}`);
});
