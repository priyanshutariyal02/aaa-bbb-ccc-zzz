import React from "react";
import HomeImage from "../assets/Home_img.avif";
import { instagram, facebook, youtube, whatsapp } from "../assets/icons/icon";
import { Link } from "react-router-dom";
const HomeImg = () => {
  return (
    <div className="w-full bg-black">
      <img
        src={HomeImage}
        alt="home_img"
        className="w-full h-[100vh] object-cover object-center opacity-60"
      />
      <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center text-white font-bold text-[7rem]  text-left uppercase home-heading">
        <h1 className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          Welcome to the
        </h1>
        <h1 className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <span className="text-[#ffee00]">Grand</span> View
        </h1>
        <h1 className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">Resort</h1>
        <p className="font-semibold text-lg italic lowercase">
          Stay here for peace and nautre, make memories that last forever. Come
          to The Grand View Resort for an unforgettable experience.
        </p>
      </div>

      <div className="absolute bottom-0 flex justify-center items-center w-full p-10">
        <Link to="/booking">
          <button
            type="submit"
            className="bg-[#ffae00] text-white font-semibold px-10 py-3 rounded-lg hover:bg-[#ffc445] transition duration-200"
          >
            Quick Booking
          </button>
        </Link>
      </div>
      {/* <div className='w-full p-5 flex gap-4 absolute items-center justify-center bottom-0 '>
          <img src={whatsapp} alt="whatsapp" className='w-[30px] h-[30px] hover:scale-125 duration-200' />
          <img src={instagram} alt="instagram" className='w-[30px] h-[30px] hover:scale-125 duration-200' />
          <img src={facebook} alt="facebook" className='w-[30px] h-[30px] hover:scale-125 duration-200' />
          <img src={youtube} alt="youtube" className='w-[30px] h-[30px] hover:scale-125 duration-200' />
        </div> */}
    </div>
  );
};

export default HomeImg;
