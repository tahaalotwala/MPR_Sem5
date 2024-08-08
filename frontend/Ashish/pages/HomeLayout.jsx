import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="page-container px-[5rem]">
        <Outlet />
      </div>
    </>
  );
};
