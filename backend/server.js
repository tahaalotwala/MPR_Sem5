import 'dotenv/config'
import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import connectDb from './db/db_connect.js';
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import itineryRoutes from "./routes/itinerary.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); 
app.use(cookieParser());
app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/itineraries",itineryRoutes);

// app.get('/',(req,res)=>{
//   res.send("Hello world");
// })


app.listen(PORT,()=>{
  connectDb();
  console.log(`Server is running on port ${PORT}`);
})