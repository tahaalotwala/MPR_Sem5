import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FlightIcon from "@mui/icons-material/Flight";
import PushPinIcon from "@mui/icons-material/PushPin";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Turkey from "../assets/images/LandingPage/Turkey.jpg";
import { popularPlaces, popularTours, reviews, news } from "../data/LandingPageData";

export const Landing = () => {
  console.log(popularPlaces);

  return (
    <>
      <div className="one-page hero-section">
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
      <div className="one-page popular-destinations">
        <div className="page-title text-center h-[8rem]">
          <h2 className="text-2xl font-bold my-5">Popular Destinations</h2>
          <p className="text-slate-500 my-3">Explore Our Most Popular Destinations Around the Globe!</p>
          <button className=" font-bold">
            All Destinations <ArrowForwardIcon />
          </button>
        </div>
        <div className="popular-places py-5">
          {popularPlaces.map(({ place, tours, image }, idx) => {
            return (
              <article key={idx} className="popular-tour rounded-lg relative">
                <img src={image} alt={place} />
                <figcaption className="z-10 absolute bottom-0 left-[50%] -translate-x-[50%] font-extrabold text-white text-2xl py-3">
                  {place}
                </figcaption>
                <h6 className="absolute top-0 right-0 m-3 px-2 bg-black text-white rounded-md">{tours} tours</h6>
              </article>
            );
          })}
        </div>
      </div>
      <div className="one-page features-section">
        <div className="features text-slate-500 h-[25rem] flex items-center">
          <article className="feature-card">
            <ApartmentIcon fontSize="large" className="my-3" />
            <h3 className="text-2xl font-bold text-black p-3">Best Accommodations</h3>
            <p className="">
              Find top-rated hotels and unique stays that suit your style and budget, ensuring a comfortable and
              memorable experience.
            </p>
          </article>
          <article className="feature-card">
            <FlightIcon fontSize="large" className="my-3" />
            <h3 className="text-2xl font-bold text-black p-3">Best Flight Routes</h3>
            <p className="">
              Discover the most efficient and affordable flight routes, connecting you to your destination with ease and
              convenience.
            </p>
          </article>
          <article className="feature-card">
            <PushPinIcon fontSize="large" className="my-3" />
            <h3 className="text-2xl font-bold text-black p-3">Must-See Attractions</h3>
            <p className="">
              Uncover the top attractions and hidden gems of your chosen destination, curated to make your trip truly
              unforgettable.
            </p>
          </article>
        </div>
      </div>
      <div className="one-page featured-tours-section">
        <header className="page-title text-center">
          <h2 className="text-3xl font-bold my-3">Featured Tours</h2>
          <p className="text-slate-500 my-3">
            Explore Our Curated Collection of Featured Tours, Handpicked to Deliver Unforgettable Experiences!
          </p>
        </header>
        <div className="featured-tours">
          {popularTours.map(({ image, price, title }, idx) => {
            return (
              <article key={idx} className="h-[18rem] bg-slate-100 rounded-lg overflow-hidden shadow-md">
                <img src={image} alt={title} className="h-[50%] w-[100%]" />
                <div className="content p-2 flex flex-col gap-5">
                  <h5 className="text-xl">{title}</h5>
                  <div className="price">
                    From : <span className="font-bold">{price}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="one-page testimonials py-[3rem]">
        <header className="page-title text-center">
          <h2 className="text-3xl font-bold my-5">What out clients say about us</h2>
        </header>
        <div className="reviews-container grid grid-cols-3 gap-[2rem] p-5">
          {reviews.map(({ image, name, review }, idx) => {
            return (
              <article key={idx} className="text-center grid gap-[1rem] relative">
                <img src={image} alt={name} className="h-[10rem] w-[10rem] rounded-full mx-auto " />
                <h6 className="font-semibold">{name}</h6>
                <p className="text-slate-500">{review}</p>
                <FormatQuoteIcon fontSize="large" className="absolute top-0 right-[5rem]" />
              </article>
            );
          })}
        </div>
      </div>
      <div className="one-page offer">
        <div className="offer-card grid grid-cols-2 rounded-xl overflow-hidden shadow-2xl my-10">
          <img src={Turkey} alt="turkey" />
          <div className="content p-5">
            <h3 className="text-3xl font-semibold my-10">Get special offers and more from Travel</h3>
            <p className="text-xl leading-[1.5rem] my-6">
              Unlock exclusive deals on flights and hotels! Save more on your next adventure with our special offers,
              tailored just for you. Whether you're planning a quick getaway or a long vacation, take advantage of these
              limited-time discounts to make your trip even more affordable and memorable.
            </p>
            <button
              id="subscribe"
              className="bg-black text-white px-2 text-xl py-1 font-bold shadow-md rounded-md my-5"
            >
              Get Started <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="one-page news  my-[5rem]">
        <header className="page-title text-center">
          <h2 className="text-3xl font-bold my-3">News From Our Blog</h2>
          <p className="text-slate-500 my-3">Stay Updated with the Latest Travel Tips and Trends from Our Blog</p>
        </header>
        <div className="news-container grid grid-cols-3 gap-5 py-5">
          {news.map(({ category, image, link, title }, idx) => {
            return (
              <article key={idx} className="">
                <img src={image} alt={title} className="rounded-lg" />
                <div className="category text-slate-400 font-bold my-2">{category}</div>
                <div className="title font-bold text-xl my-1">{title}</div>
                <button className="p-2">
                  Read more <ArrowForwardIcon />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};
