import Itinerary from "../models/itinerary.model.js";

// Create a new itinerary
export const createItinerary = async (req, res) => {
  try {
    const { destination, startDate, endDate, activities } = req.body;

    const newitinerary = await Itinerary.create({
      userId: req.user._id,
      destination,
      startDate,
      endDate,
      activities,
    });

    res.status(201).json(newitinerary);
  } catch (error) {
    console.log("Error in createItinerary controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all itineraries for a user
export const getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find({ userId: req.user._id });

    res.status(200).json(itineraries);
  } catch (error) {
    console.log("Error in getItineraries controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a specific itinerary by ID
export const getItineraryById = async (req, res) => {
  try {
    // Find the itinerary by ID
    const itinerary = await Itinerary.findById(req.params.id);

    // Check if itinerary exists
    if (!itinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }

    // Ensure the itinerary belongs to the authenticated user
    if (itinerary.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }

    // Send a success response with the itinerary
    res.status(200).json(itinerary);
  } catch (error) {
    console.log("Error in getItineraryById controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update an itinerary
export const updateItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);

    if (!itinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }

    // Ensure the itinerary belongs to the authenticated user
    if (itinerary.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }

    const updatedItinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedItinerary);
  } catch (error) {
    console.log("Error in updateItinerary controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);

    if (!itinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }

    // Ensure the itinerary belongs to the authenticated user
    if (itinerary.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Access denied" });
    }

    const deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Itinerary deleted successfully" });
  } catch (error) {
    console.log("Error in deleteItinerary controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
