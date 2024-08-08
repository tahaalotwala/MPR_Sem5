import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";

export const Landing = () => {
  return (
    <>
      <div className="one-page">
        <section id="hero" className="rounded-3xl">
          <div className="hero-text h-full w-[50%] flex flex-col justify-center gap-3 text-white p-[5rem] -translate-y-5">
            <h2 className="text-5xl font-bold leading-[4rem]">Live your dream destinations</h2>
            <p className="text-sm">
              Discover your next adventure with our AI-powered travel planner! Get personalized itineraries, the best
              flight deals, and top hotel recommendations tailored just for you.
            </p>
          </div>
        </section>
        <footer className="bg-white shadow-md flex w-[70%] justify-between mx-auto py-5 px-10 rounded-xl -translate-y-[50%] items-center text-xl">
          <div className="hero-footer-item flex items-center gap-1">
            <LocationOnIcon className="text-gray-400" />
            <h5 className="font-bold">Location</h5>
          </div>
          <div className="hero-footer-item flex items-center gap-1">
            <CalendarMonthIcon className="text-gray-400" />
            <h5 className="font-bold">Date</h5>
          </div>
          <div className="hero-footer-item flex items-center gap-1">
            <PeopleIcon className="text-gray-400" />
            <h5 className="font-bold">Guests</h5>
          </div>
          <div className="hero-footer-item flex items-center gap-1">
            <button id="hero-search" className="bg-black text-white px-2 py-1 shadow-md rounded-md">
              <SearchIcon /> Search
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};
