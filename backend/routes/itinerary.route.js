import express from 'express';
import protectRoute from "../middleware/protectRoute.js";
import { createItinerary, getItineraries, getItineraryById, updateItinerary, deleteItinerary } from '../controllers/itinerary.controller.js';

const router = express.Router();

// Create a new itinerary
router.post('/', protectRoute, createItinerary);

// Get all itineraries for a user
router.get('/', protectRoute, getItineraries);

// Get a specific itinerary by ID
router.get('/:id', protectRoute, getItineraryById);

// Update an itinerary
router.put('/:id', protectRoute, updateItinerary);

// Delete an itinerary
router.delete('/:id', protectRoute, deleteItinerary);

export default router;
