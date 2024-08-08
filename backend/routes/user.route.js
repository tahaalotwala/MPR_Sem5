import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { userInfo } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/",protectRoute,userInfo);

export default router;