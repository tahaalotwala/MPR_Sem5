import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import { useAuthContext } from "../context/AuthContext";
import useLogout from "../hooks/useLogout";

export const Navbar = () => {
  const {authUser} = useAuthContext();
  const {logout} = useLogout();
  return (
    <>
      <nav className="flex justify-between px-[5rem] h-[5rem] items-center">
        <section className="logo flex gap-1 items-center">
          <h2 className="logo-text text-xl font-extrabold">Travel</h2>
          <img src={logo} alt="Logo" className="h-6" />
        </section>
        <section className="nav-links flex gap-5">
          <NavLink to={"/"} className="nav-link">
            Home
          </NavLink>
          <NavLink to={"/hotels"} className="nav-link">
            Hotels
          </NavLink>
          <NavLink to={"/plan"} className="nav-link">
            Plan Trip
          </NavLink>
          <NavLink to={"/about"} className="nav-link">
            About Us
          </NavLink>
          <NavLink to={"/contact"} className="nav-link">
            Contact
          </NavLink>
        </section>
        
        <section className="nav-cta flex gap-3">
        {!authUser ? 
        <>
        <NavLink to={"/login"} className= "nav-link">
          <button className="nav-login px-3 py-[0.2rem] rounded-lg">Log in</button>
          </NavLink>
          <NavLink to={"/signup"} className= "nav-link">
          <button className="nav-signup bg-black text-white px-3 py-[0.2rem] rounded-lg">Sign up</button>
          </NavLink>
          </>
          : 
            <button 
            className="nav-logout bg-black text-white px-3 py-[0.2rem] rounded-lg"
            onClick={logout}
            >
              Log out</button>
            }

        </section>
      </nav>
    </>
  );
};
