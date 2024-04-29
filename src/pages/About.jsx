import React from "react";
import {
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
  g7,
  g8,
  g9,
  g10,
  g11,
  g12,
  g13,
} from "../assets/img/images.js";
const About = () => {
  return (
    <>
      <section className="bg-gray-100 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[4rem]">
          <h2 className="text-[4rem] font-bold mb-4 text-center">
            <span className="text-gray-800">About</span>{" "}
            <span className="text-[#ffae00]">Us</span>
          </h2>
          <div className="flex w-full gap-[3rem] justify-center text-center about-section mt-[4rem]">
            <div className="w-[50%] about-container">
              <p className="text-gray-700 leading-relaxed text-[20px] text-justify tracking-wide  about-para">
                Welcome to Grand View Resort, nestled between the picturesque
                towns of Dhanaulti and the majestic Queen of Hills, Mussoorie!
                Our prime location offers breathtaking vistas of the Himalayas
                at dawn and the tranquil Doon Valley by night. Each cottage
                provides a cozy retreat with spacious bedroom areas measuring
                15x12 feet, complete with modern washroom facilities. Step onto
                your private balcony, measuring 5x4 feet, and immerse yourself
                in the serene surroundings, perfect for unwinding after a day of
                exploration. Experience comfort and tranquility with every stay
                at Grand View Resort, where nature's beauty awaits just beyond
                your doorstep.
              </p>
            </div>
            <div className="relative overflow-hidden w-[50%] about-container">
              <img
                src={g8}
                alt="About Us"
                className="rounded-md shadow-lg transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-[4rem]">
          <a
            href="/"
            className=" bg-blue-500 hover:bg-blue-600 text-white text-center font-medium py-3 px-6 rounded-md transition-colors duration-300"
          >
            Home
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
