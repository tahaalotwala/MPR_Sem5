import React from "react";
import { Carousel } from "@material-tailwind/react";
import HotelCard from "../components/HotelCard";
import img1 from "../assets/images/hotels/img1.jpeg";
import img26 from "../assets/images/hotels/img26.jpeg";
import img27 from "../assets/images/hotels/img27.jpeg";
import img10 from "../assets/images/hotels/img10.jpeg";
import img11 from "../assets/images/hotels/img11.jpeg";
import img12 from "../assets/images/hotels/img12.jpeg";
import img13 from "../assets/images/hotels/img13.jpeg";
import img14 from "../assets/images/hotels/img14.webp";
import img15 from "../assets/images/hotels/img15.jpeg";
import img16 from "../assets/images/hotels/img16.jpeg";
import img17 from "../assets/images/hotels/img17.jpeg";
import img18 from "../assets/images/hotels/img18.jpeg";
import img19 from "../assets/images/hotels/img19.jpeg";
import img20 from "../assets/images/hotels/img20.jpeg";
import img21 from "../assets/images/hotels/img21.jpeg";
import img22 from "../assets/images/hotels/img22.jpeg";
import img23 from "../assets/images/hotels/img23.jpeg";
import img24 from "../assets/images/hotels/img24.jpeg";
import img25 from "../assets/images/hotels/img25.jpeg";
import carousel1 from "../assets/images/hotels/carousel1.webp";
import carousel2 from "../assets/images/hotels/carousel2.jpeg";
import carousel3 from "../assets/images/hotels/carousel3.jpeg";

export const FindHotels = () => {
  const cities = [
    "Mumbai",
    "New Delhi",
    "Bangalore",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Visakhapatnam",
    "Thane",
    "Bhopal",
    "Patna",
  ];

  const hotels = [
    {
      name: "Taj Mahal Palace",
      description:
        "This iconic hotel overlooks the Gateway of India and offers a blend of old-world charm and modern luxury. Guests enjoy heritage rooms, gourmet dining, an opulent spa, and a stunning pool area, all within a historic setting.",
      city: "Mumbai",
      country: "India",
      imgUrl: img1,
    },
    {
      name: "The Oberoi Udaivilas",
      description:
        "Nestled on the banks of Lake Pichola, this luxury resort features sprawling gardens, private boat rides, and rooms with private terraces. The hotel offers a world-class spa, multiple dining options, and breathtaking views of the lake and surrounding hills.",
      city: "Udaipur",
      country: "India",
      imgUrl: img26,
    },
    {
      name: "The Leela Palace, New Delhi",
      description:
        "A luxurious palace-style hotel in the heart of Delhi, offering spacious rooms with regal decor, a rooftop infinity pool, and a state-of-the-art spa. Guests can indulge in fine dining at award-winning restaurants while enjoying panoramic views of the city.",
      city: "New Delhi",
      country: "India",
      imgUrl: img27,
    },
    {
      name: "The Taj Mahal Hotel",
      description:
        "Located in the vibrant center of New Delhi, this hotel combines heritage with contemporary luxury. It features elegantly appointed rooms, a wellness spa, multiple fine dining restaurants, and close proximity to key city attractions.",
      city: "New Delhi",
      country: "India",
      imgUrl: img10,
    },
    {
      name: "Rambagh Palace",
      description:
        "Once a royal residence, Rambagh Palace is a stunning heritage hotel offering opulent suites, beautifully manicured gardens, and a luxurious spa. The hotel’s fine dining restaurants serve gourmet cuisine, and guests can experience traditional Rajasthani hospitality.",
      city: "Jaipur",
      country: "India",
      imgUrl: img11,
    },
    {
      name: "The Oberoi Amarvilas",
      description:
        "Located just 600 meters from the Taj Mahal, this hotel offers unparalleled views of the monument from every room. It features Mughal-inspired architecture, a luxurious spa, and fine dining options that celebrate Indian and international cuisines.",
      city: "Agra",
      country: "India",
      imgUrl: img12,
    },
    {
      name: "ITC Grand Chola",
      description:
        "A tribute to Southern India’s grand Chola dynasty, this luxurious hotel features palatial architecture, expansive suites, and state-of-the-art facilities. The hotel offers multiple fine dining restaurants, a large spa, and a rooftop infinity pool with city views.",
      city: "Chennai",
      country: "India",
      imgUrl: img13,
    },
    {
      name: "The Leela Palace, Udaipur",
      description:
        "Perched on the edge of Lake Pichola, this hotel offers breathtaking views, lavish interiors, and personalized service. Guests can enjoy private boat rides, a serene spa, and gourmet dining while being surrounded by the tranquil beauty of Udaipur’s lakes and palaces.",
      city: "Udaipur",
      country: "India",
      imgUrl: img14,
    },
    {
      name: "Taj Lake Palace",
      description:
        "Situated in the middle of Lake Pichola, this stunning hotel offers a romantic setting with luxurious rooms, fine dining, and personalized service. The hotel’s exquisite architecture and serene ambiance provide an unforgettable experience.",
      city: "Udaipur",
      country: "India",
      imgUrl: img15,
    },
    {
      name: "The Oberoi Rajvilas",
      description:
        "A luxurious resort set in 32 acres of lush gardens, featuring traditional Rajasthani architecture, elegant rooms, and a tranquil spa. The hotel offers curated experiences, such as private yoga sessions and camel rides, providing a blend of luxury and cultural immersion.",
      city: "Jaipur",
      country: "India",
      imgUrl: img16,
    },
    {
      name: "The Oberoi Grand",
      description:
        "Known as the “Grand Dame of Chowringhee,” this historic hotel offers colonial charm combined with modern luxury. It features elegantly appointed rooms, a spa, and fine dining options, all located in the heart of Kolkata’s bustling business district.",
      city: "Kolkata",
      country: "India",
      imgUrl: img17,
    },
    {
      name: "The Leela Kovalam",
      description:
        "A cliff-top hotel offering panoramic views of the Arabian Sea, this resort features luxurious rooms, an Ayurveda spa, and multiple dining options. The hotel’s unique location, with its private beach and lush gardens, makes it a perfect retreat for relaxation.",
      city: "Thiruvananthapuram",
      country: "India",
      imgUrl: img18,
    },
    {
      name: "Taj Falaknuma Palace",
      description:
        "Perched 2,000 feet above Hyderabad, this palace hotel offers a royal experience with its opulent decor, grand dining halls, and luxurious suites. Guests can enjoy a horse-drawn carriage ride, a world-class spa, and a unique culinary journey in a setting that once hosted royalty.",
      city: "Hyderabad",
      country: "India",
      imgUrl: img19,
    },
    {
      name: "The Oberoi, Mumbai",
      description:
        "Located in the heart of Mumbai, this hotel offers contemporary luxury with stunning ocean views, elegant rooms, and impeccable service. It features fine dining options, a serene spa, and proximity to key attractions, making it an ideal choice for both business and leisure travelers.",
      city: "Mumbai",
      country: "India",
      imgUrl: img20,
    },
    {
      name: "The Taj Mahal Tower",
      description:
        "Part of the iconic Taj Mahal Palace complex, this hotel offers stunning views of the Arabian Sea, luxurious rooms, and world-class dining. The hotel’s blend of modern amenities with historic charm makes it a landmark destination in Mumbai.",
      city: "Mumbai",
      country: "India",
      imgUrl: img21,
    },
    {
      name: "The Lodhi, New Delhi",
      description:
        "A contemporary luxury hotel offering spacious rooms with private plunge pools, a world-class spa, and gourmet dining options. The Lodhi’s understated elegance and personalized service provide a tranquil oasis in the heart of New Delhi.",
      city: "New Delhi",
      country: "India",
      imgUrl: img22,
    },
    {
      name: "The Leela Palace, New Delhi",
      description:
        "A luxurious palace-style hotel in the heart of Delhi, offering spacious rooms with regal decor, a rooftop infinity pool, and a state-of-the-art spa. Guests can indulge in fine dining at award-winning restaurants while enjoying panoramic views of the city.",
      city: "New Delhi",
      country: "India",
      imgUrl: img23,
    },
    {
      name: "The Leela Palace, Udaipur",
      description:
        "Perched on the edge of Lake Pichola, this hotel offers breathtaking views, lavish interiors, and personalized service. Guests can enjoy private boat rides, a serene spa, and gourmet dining while being surrounded by the tranquil beauty of Udaipur’s lakes and palaces.",
      city: "Udaipur",
      country: "India",
      imgUrl: img24,
    },
    {
      name: "The Leela Palace, Bengaluru",
      description:
        "A luxurious hotel set amidst lush gardens in the heart of the city, offering spacious rooms, fine dining, and a luxurious spa. The hotel’s regal architecture and impeccable service make it a top choice for both business and leisure travelers.",
      city: "Bengaluru",
      country: "India",
      imgUrl: img25,
    },
  ];

  return (
    <>
      <div className="flex justify-center " style={{ height: "30rem" }}>
        <div className="Hotel-SearchBar border-spacing-0 " style={{ position: "absolute", top: "45%", zIndex: "1" }}>
          <div className="mb-3 xl:w-96 ">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 block flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary bg-white rounded-xl text-black"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />

              {/* <!--Search icon--> */}
              <span
                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                id="basic-addon2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <Carousel transition={{ duration: 2 }} className="rounded-xl w-11/12">
          <img src={carousel1} alt="image 1" className="h-full w-full object-fill" />
          <img src={carousel2} alt="image 2" className="h-full w-full object-fill" />
          <img src={carousel3} alt="image 3" className="h-full w-full object-fill" />
        </Carousel>
      </div>
      <div className="">
        {/* <div className="flex justify-between py-[1.5rem] items-center max-w-[80vw] overflow-auto mx-auto">
          <section className="nav-links flex gap-5">
            {cities.map((city) => {
              return (
                <button className="nav-link hover:text-gray-500 whitespace-nowrap" key={city}>
                  {city}
                </button>
              );
            })}
          </section>
        </div> */}
      </div>
      <div>
        <ul role="list" className="divide-y divide-gray-100 flex justify-center flex-wrap py-3">
          {hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </ul>
      </div>
    </>
  );
};
