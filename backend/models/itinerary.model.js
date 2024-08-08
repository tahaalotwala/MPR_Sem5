import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    activities: [
      {
        name: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          required: true,
        },
        location: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Itinerary = mongoose.model("Itinerary", itinerarySchema);
export default Itinerary;
