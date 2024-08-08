import React from "react";

function HotelCard({hotel}) {
  return (
    <>
      <li className="w-11/12 h-56 flex border-2 m-2">
        <div className="h-full w-1/4 flex justify-center items-center">
          <img
            src={hotel.imgUrl}
            alt="Hotel Img"
            className="w-4/5 h-4/5 object-cover rounded-lg"
          />
        </div>
        <div className="w-3/4 p-4">
          <h3 className="text-2xl font-bold">{hotel.name}</h3>
          <p>
            {hotel.description}
          </p>
          <h5>
            <span className="font-bold">{hotel.city}</span>,
            <span className="font-bold">{hotel.country}</span>
          </h5>
          <div>
            <button
              className="p-1 border-black rounded-lg h-11 w-32 text-center mt-2"
              style={{ backgroundColor:"#0384fc"}}
            >
              Book Now
            </button>
          </div>
        </div>
      </li>
    </>
  );
}

export default HotelCard;
