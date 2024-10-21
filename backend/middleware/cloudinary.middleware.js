import { v2 as cloudinary } from "cloudinary";
import User from "../models/user.model";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadCloudinary = async (req, res) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(req.file.path);

    // Ensure the upload was successful
    if (!uploadResult) {
      return res.status(500).json({ message: "Upload to Cloudinary failed" });
    }

    console.log("Upload result:", uploadResult);

    // Delete the file after successful upload
    await fs.promises.unlink(req.file.path);
    console.log("File deleted successfully from the local filesystem");

    // Update user's profile image in the database
    const userId = req.user._id;
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { profilePic: uploadResult.secure_url },
      { new: true, runValidators: true }
    );
    
    // Ensure user was found and updated
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.save()

    // Send back the updated user info or a success message
    return res.status(200).json({ message: "Profile picture updated successfully", user });
  } catch (error) {
    console.error("Error during image upload:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

export default uploadCloudinary;
