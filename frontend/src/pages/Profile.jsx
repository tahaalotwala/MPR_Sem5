import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import coverPhoto from "../assets/images/ProfilePage/temp_coverphoto_profilepage.jpg";
import useLogout from "../hooks/useLogout";
import { favouriteHotels } from "../data/ProfilePageData";
import FavouritesCard from "../components/FavouritesCard";
import axios from "axios";
import { FiUpload } from "react-icons/fi";

export const Profile = () => {
  const { authUser,authToken,setAuthUser } = useAuthContext();
  const { logout } = useLogout();

  const [selectedSection, setSelectedSection] = useState("My Favourites");
  const [profilePic, setProfilePic] = useState(authUser.profilePic);
  const [coverImg, setCoverImg] = useState(coverPhoto);

  const handleProfilePicUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("profilePic", file);
    
    try {
      // Ensure authToken is available and valid
      console.log("authtoken:", authToken);
      
      const response = await axios.post(
        "http://localhost:8080/api/user/upload-profile-pic",
        formData,
        {
          headers: {
            'Authorization': `Bearer ${authToken}`, // Authorization token is in the correct format
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      // Assuming response.data contains the updated user data or at least the new profile pic path
      const updatedProfilePic = response.data.user.profilePic;
  
      // Update the global auth user state and local profile pic state
      setAuthUser({ ...authUser, profilePic: updatedProfilePic });
      setProfilePic(updatedProfilePic);
      
      console.log("Profile picture uploaded successfully", response.data);
    } catch (error) {
      console.error("Error uploading profile picture", error);
    }
  };
  
  

  const handleCoverImgUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    const token = localStorage.getItem("token");
    formData.append("coverImage", file);

    try {
      const response = await axios.post(
        "/api/user/upload-cover",
        formData,
        {
          headers: {
            authorization: `{bearer ${token}}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setCoverImg(response.data.filePath);
    } catch (error) {
      console.error("Error uploading cover image", error);
    }
  };
  return (
    <div className="profile-wrapper min-h-[80vh]">
      <div className="cover-photo bg-slate-400 h-72 overflow-hidden relative">
        <img
          src={coverImg}
          className="h-full w-full object-cover"
          alt="Cover"
        />
        <label className="absolute top-4 right-4 cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handleCoverImgUpload}
            className="hidden"
          />
          <FiUpload className="fas fa-upload text-white text-xl" />
        </label>
      </div>

      <div className="profile-info flex h-32 relative">
        <div className="profile-img w-52 h-52 rounded-full translate-x-10 -translate-y-28 border-4 border-slate-100 overflow-hidden relative">
          <img
            src={authUser.profilePic}
            alt="Profile-pic"
            className="w-full h-full object-cover"
          />
          <label className="absolute bottom-2 right-2 cursor-pointer z-10">
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicUpload}
              className="hidden"
            />
            <FiUpload className="text-black text-xl  mr-6 mb-7" />
          </label>
        </div>

        <div className="profile-data flex flex-col ml-14 mt-4">
          <span className="font-semibold">{authUser.fullName}</span>
          <span className="text-gray-600">
            @{authUser.username} | {authUser.location}
          </span>
          <button
            className="bg-black text-white px-3 py-[0.2rem] rounded-lg mt-4"
            onClick={logout}
          >
            Log out
          </button>
        </div>
      </div>

      <div className="flex bg-[#EFEFEF] w-full h-12 items-center justify-evenly rounded-xl shadow-md mt-6">
        <p
          className={`font-semibold tracking-wide cursor-pointer px-6 py-1 rounded-lg ${
            selectedSection === "My Favourites" ? "bg-[#FFFFFF]" : ""
          }`}
          onClick={() => setSelectedSection("My Favourites")}
        >
          My Favourites
        </p>
        <p
          className={`font-semibold tracking-wide cursor-pointer px-6 py-1 rounded-lg ${
            selectedSection === "Timeline" ? "bg-[#FFFFFF]" : ""
          }`}
          onClick={() => setSelectedSection("Timeline")}
        >
          Timeline
        </p>
        <p
          className={`font-semibold tracking-wide cursor-pointer px-6 py-1 rounded-lg ${
            selectedSection === "Account Settings" ? "bg-[#FFFFFF]" : ""
          }`}
          onClick={() => setSelectedSection("Account Settings")}
        >
          Account Settings
        </p>
      </div>

      <div className="content mt-6">
        {selectedSection === "My Favourites" && (
          <div className="favourites grid grid-cols-4 gap-3 my-6">
            {favouriteHotels.map((hotel, index) => (
              <FavouritesCard
                key={index}
                image={hotel.image}
                title={hotel.title}
                price={hotel.price}
              />
            ))}
          </div>
        )}

        {selectedSection === "Timeline" && (
          <div className="timeline">
            <p>Timeline content goes here.</p>
          </div>
        )}

        {selectedSection === "Account Settings" && (
          <div className="account-settings">
            <p>Account settings content goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};
