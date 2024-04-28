import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { g1, g2, g5, g6, g8, g10 } from "../assets/img/images.js";
const NewHomeImg = () => {
  return (
    <>
      <div className="w-full h-full bg-black">
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              src={g6}
              className="w-full h-[100vh] object-cover opacity-60"
              text="First slide"
            />
            <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center text-white font-bold text-[7rem]  text-left uppercase home-heading">
              <div className="w-full flex flex-col items-center">
                <h1 className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                  Welcome to the
                </h1>
                <h1 className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                  <span className="text-[#ffee00]">Grand</span> View
                </h1>
                <h1 className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                  Resort
                </h1>
              </div>
              <p className="font-semibold text-lg italic lowercase">
                Stay here for peace and nautre, make memories that last forever.
                Come to The Grand View Resort for an unforgettable experience.
              </p>
            </div>

            <Carousel.Caption>
              <Link to="/booking">
                <button
                  type="submit"
                  className="bg-[#ffae00] text-white font-semibold px-10 py-2 rounded-lg hover:bg-[#ffc445] transition duration-200"
                >
                  Quick Booking
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              src={g5}
              className="w-full h-[100vh] object-cover opacity-60"
              text="First slide"
            />
            <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center text-white font-bold text-[7rem]  text-left uppercase home-heading">
              <p className="font-semibold text-2xl italic lowercase">
                Loving the cozy vibes in this room with tables and chairs,
                perfect for a coffee break or a meal with friends!
              </p>
            </div>

            <Carousel.Caption>
              <Link to="/booking">
                <button
                  type="submit"
                  className="bg-[#ffae00] text-white font-semibold px-10 py-2 rounded-lg hover:bg-[#ffc445] transition duration-200"
                >
                  Quick Booking
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              src={g8}
              className="w-full h-[100vh] object-cover opacity-60"
              text="First slide"
            />
            <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center text-white font-bold text-[7rem]  text-left uppercase home-heading">
              <p className="font-semibold text-lg italic lowercase">
                Just woke up to this breathtaking view of the mountain range
                from the forest. Feeling so grateful to be surrounded by such
                natural beauty.
              </p>
            </div>

            <Carousel.Caption>
              <Link to="/booking">
                <button
                  type="submit"
                  className="bg-[#ffae00] text-white font-semibold px-10 py-2 rounded-lg hover:bg-[#ffc445] transition duration-200"
                >
                  Quick Booking
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              src={g1}
              className="w-full h-[100vh] object-cover opacity-60"
              text="First slide"
            />
            <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center text-white font-bold text-[7rem]  text-left uppercase home-heading">
              <p className="font-semibold text-lg italic lowercase">
                When you find your tribe, you just have to snap a pic. Smiling
                faces and good vibes all around.
              </p>
            </div>

            <Carousel.Caption>
              <Link to="/booking">
                <button
                  type="submit"
                  className="bg-[#ffae00] text-white font-semibold px-10 py-2 rounded-lg hover:bg-[#ffc445] transition duration-200"
                >
                  Quick Booking
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              src={g10}
              className="w-full h-[100vh] object-cover opacity-60"
              text="First slide"
            />
            <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center text-white font-bold text-[7rem]  text-left uppercase home-heading">
              <p className="font-semibold text-lg italic lowercase">
                Smiling faces, stylish clothing, and endless laughter Feeling so
                lucky to have been a part of such a fun day.
              </p>
            </div>

            <Carousel.Caption>
              <Link to="/booking">
                <button
                  type="submit"
                  className="bg-[#ffae00] text-white font-semibold px-10 py-2 rounded-lg hover:bg-[#ffc445] transition duration-200"
                >
                  Quick Booking
                </button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default NewHomeImg;
