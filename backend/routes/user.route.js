import express from 'express';
import { upload } from '../middleware/multer.middleware.js'; 
import protectRoute from "../middleware/protectRoute.middleware.js";
import { userInfo, uploadCoverImage, uploadProfilePic } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, userInfo);
router.post("/upload-cover", protectRoute, upload.single('coverImage'), uploadCoverImage);
router.post("/upload-profile-pic", protectRoute, upload.single('profilePic'), uploadProfilePic);

export default router;