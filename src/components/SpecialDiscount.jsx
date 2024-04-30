import React from "react";
import { Link } from "react-router-dom";
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
import {
  bed,
  bath,
  food,
  breakfast,
  night,
  bedroom,
  location,
  whatsapp,
  instagram,
  youtube,
  facebook,
  direction,
} from "../assets/icons/icon.js";

const SpecialDiscount = () => {
  return (
    <div className="w-full h-[auto] mt-[4rem]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center font-bold text-[4.5rem] special-offer">
          <span className="text-gray-800">Special</span>{" "}
          <span className="text-[#ffae00]">Discount</span>
        </h1>
        <div className="text-center my-2 text-lg font-[400] special-offer-para">
          <p>
            Destination can be described where you are going, Like a traveler
            whose
          </p>
          <p>
            destination is Hills, Or a place that is known for a popular
            purpose.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center my-11 gap-10 md-device">
        <div className="w-[30rem] bg-white shadow-xl rounded-lg card">
          <div className="h-[20rem] relative overflow-hidden rounded-t-lg card-img">
            <img
              src={g6}
              alt=""
              className="w-full h-[21rem] object-cover object-center transition duration-300 ease-in-out hover:scale-110 "
            />
          </div>

          <div className="p-3">
            <div className="flex justify-between items-center">
              <p className="text-[1.5rem] font-bold tracking-wide">
                ₹17,997{" "}
                <span className="line-through text-lg font-normal text-gray-500">
                  ₹24,000
                </span>
              </p>
              <p className="text-yellow-300 border-2 font-semibold border-yellow-300 px-2 rounded-xl">
                offer
              </p>
            </div>
            <p className="text-md tracking-wide text-gray-600 ">
              (+Exclusive of all taxes)
            </p>
            <div className="grid grid-cols-2 gap-4 p-4 text-center font-[500]">
              <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                <img src={bed} alt="bed" className="w-[3rem] p-1" />1 Master Bed
              </p>
              <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                <img src={bath} alt="bath" className="w-[3rem] p-1" />1 Bathroom
              </p>
              <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                <img src={breakfast} alt="food" className="w-[3rem] p-1" />
                Breakfast
              </p>
              <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                <img src={night} alt="bedroom" className="w-[3rem] p-1" />3
                Night
              </p>
            </div>

            <div className="flex gap-2 items-center p-4">
              <img src={location} alt="location" className="w-[20px]" />
              <a href="https://www.google.com/maps?q=30.4440250396729,78.2041549682617">
                <p>buranskhanda(dhanualti) district dehradun</p>
              </a>
            </div>
            <div className="text-right my-2">
              <Link to="/bookingcard1">
                <button className="bg-[#ffae00] text-white px-6 py-2 rounded-xl hover:bg-[#ffc352] duration-200">
                  Book
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[30rem] bg-white shadow-xl rounded-lg card">
          <div className=" h-[20rem] relative overflow-hidden rounded-t-lg card-img">
            <img
              src={g3}
              alt=""
              className="w-full h-[21rem] object-cover transition duration-300 ease-in-out hover:scale-110"
            />
          </div>

          <div className="p-3">
            <div className="flex justify-between items-center">
              <p className="text-[1.5rem] font-bold tracking-wide">
                ₹19,797{" "}
                <span className="line-through text-lg font-normal text-gray-500">
                  ₹22,797
                </span>
              </p>
              <p className="text-yellow-300 border-2 font-semibold border-yellow-300 px-2 rounded-xl">
                offer
              </p>
            </div>
            <p className="text-md tracking-wide text-gray-600 ">
              (+Exclusive of all taxes)
            </p>
            <div className="grid grid-cols-2 gap-4 p-4 text-center font-[500]">
              <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                <img src={bed} alt="bed" className="w-[3rem] p-1" />1 Master Bed
              </p>
              <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                <img src={bath} alt="bath" className="w-[3rem] p-1" />1 Bathroom
              </p>
              <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                <img src={breakfast} alt="food" className="w-[3rem] p-1" />
                Breakfast
              </p>
              <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                <img src={night} alt="bedroom" className="w-[3rem] p-1" />5
                Night
              </p>
            </div>

            <div className="flex gap-2 items-center p-4">
              <img src={location} alt="location" className="w-[20px]" />
              <a href="https://www.google.com/maps?q=30.4440250396729,78.2041549682617">
                <p>buranskhanda(dhanualti) district dehradun</p>
              </a>
            </div>
            <div className="text-right my-2">
              <Link to="/bookingcard2">
                <button className="bg-[#ffae00] text-white px-6 py-2 rounded-xl hover:bg-[#ffc352] duration-200">
                  Book
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDiscount;
