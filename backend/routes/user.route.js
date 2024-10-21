import express from 'express';
import { upload } from '../middleware/multer.middleware.js'; 
import protectRoute from "../middleware/protectRoute.middleware.js";
import {uploadCloudinary, userInfo, uploadCoverImage } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, userInfo);
router.post("/upload-cover", protectRoute, upload.single('coverImage'), uploadCloudinary);
router.post("/upload-profile-pic", protectRoute, upload.single('profilePic'),uploadCloudinary);

export default router;