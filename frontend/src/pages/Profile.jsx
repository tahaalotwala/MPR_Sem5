import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import coverPhoto from "../assets/images/ProfilePage/temp_coverphoto_profilepage.jpg";
import useLogout from "../hooks/useLogout";
import { favouriteHotels } from "../data/ProfilePageData";
import FavouritesCard from "../components/FavouritesCard";
import { Timeline } from "../components/Timeline";
import { AccountSettings } from "../components/AccountSettings";

export const Profile = () => {
  const { authUser } = useAuthContext();
  const { logout } = useLogout();

  const [selectedSection, setSelectedSection] = useState("My Favourites");

  return (
    <div className="profile-wrapper min-h-[80vh] mb-5">
      <div className="cover-photo bg-slate-400 h-72 overflow-hidden">
        <img src={coverPhoto} className="h-full w-full object-cover" alt="Cover" />
      </div>

      <div className="profile-info flex h-32">
        <div className="profile-img w-52 h-52 rounded-full translate-x-10 -translate-y-28 border-4 border-slate-100 overflow-hidden">
          <img src={authUser.profilePic} alt="Profile-pic" className="w-full h-full object-cover" />
        </div>

        <div className="profile-data flex flex-col ml-14 mt-4">
          <span className="font-semibold">{authUser.fullName}</span>
          <span className="text-gray-600">
            @{authUser.username} | {authUser.location}
          </span>
          <button className="bg-black text-white px-3 py-[0.2rem] rounded-lg mt-4" onClick={logout}>
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
          Recent Trips
        </p>
      </div>

      <div className="content mt-6">
        {selectedSection === "My Favourites" && (
          <div className="favourites grid grid-cols-4 gap-3 my-6">
            {favouriteHotels.map((hotel, index) => (
              <FavouritesCard key={index} image={hotel.image} title={hotel.title} price={hotel.price} />
            ))}
          </div>
        )}

        {selectedSection === "Timeline" && (
          <div className="timeline">
            <Timeline />
          </div>
        )}

        {selectedSection === "Account Settings" && (
          <div className="account-settings">
            <AccountSettings />
          </div>
        )}
      </div>
    </div>
  );
};
