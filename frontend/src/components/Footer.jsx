import banner from "../assets/images/footer-banner.png";
import logo from "../assets/icons/logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Footer = () => {
  return (
    <footer>
      <section className=" relative">
        <img src={banner} alt="" className="w-[100%]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white text-center">
          <p className="">Don't Know Which Destination To Choose?</p>
          <h3 className="text-xl font-bold my-2">Call Us (+91) 86522 02004</h3>
        </div>
      </section>
      <main className="p-[4rem] flex justify-evenly">
        <div className="footer-col max-w-[20rem]">
          <div className=" logo flex gap-1 items-center">
            <h2 className="logo-text text-xl font-extrabold">Travel Agency</h2>
            <img src={logo} alt="Logo" className="h-6" />
          </div>
          <p className="text-sm text-slate-500 py-2">
            At Travel, we make your journeys unforgettable with personalized itineraries, top deals on flights and
            hotels, and expert travel tips. Whether you're exploring new places or revisiting favorites, we're here to
            help you travel smarter and experience more.
          </p>
        </div>
        <div className="footer-col">
          <h3 className="font-bold mb-5">Destinations</h3>
          <ul className="footer-destinations">
            <li>Egypt</li>
            <li>Turkey</li>
            <li>USA</li>
            <li>France</li>
            <li>Greece</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="font-bold mb-5">Useful links </h3>
          <ul className="footer-destinations">
            <li>About Us</li>
            <li>Travel Blog</li>
            <li>Be out Partner</li>
            <li>F.A.Q</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="font-bold mb-5">Contact </h3>
          <ul>
            <li>
              <LocalPhoneIcon /> (+91) 86522 02004
            </li>
            <li>
              <EmailIcon /> travel.agency@tsec.com
            </li>
            <li>
              <LocationOnIcon /> TSEC, Bandra, Mumbai.
            </li>
          </ul>
        </div>
      </main>
    </footer>
  );
};
