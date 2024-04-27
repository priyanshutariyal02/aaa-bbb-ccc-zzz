import React, { useRef, useState } from "react";
import HomeImg from "../components/HomeImg";
import transfer from "../assets/icons/transfer.png";
import resortImg from "../assets/resort1.avif";
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
} from "../assets/icons/icon.js";
import Feedback from "../components/feedback/Feedback.jsx";
const Home = () => {
  const inputs =
    "border border-black w-[15rem] h-[3rem] px-3 outline-none rounded-lg";

  let nrooms;
  const handleRoomChange = (e) => {
    nrooms = e.target.value;
    console.log(nrooms);
  };
  return (
    <>
      <div className="bg-slate-300/20 flex flex-col justify-center items-center">
        <HomeImg />

        {/* comment off */}
        <>
          {/* 
        <form className="w-[70%] h-[auto] bg-white my-10 shadow-xl rounded-xl flex flex-col gap-10 justify-center items-center py-6 hotel-rev" >

                    <div className='flex gap-20 items-center check-in-out'>
                        <div>
                            <p className='text-black p-2 font-bold'>Check in</p>
                            <input type="date" name="checkin" id="checkin" className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                        </div>

                        <img src={transfer} alt="transfer_img" className='w-[3rem] h-[3rem] object-cover' />

                        <div>
                            <p className='text-black rounded-lg p-2 font-bold'>Check out</p>
                            <input
                                type="date"
                                name="checkin"
                                id="checkin"

                                className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                        </div>
                    </div>

                    <div className='flex gap-20 gusts'>
                        <div>
                            <p className='text-black rounded-lg p-2 font-bold'>Rooms</p>
                            <input
                                type="number"
                                name="rooms"
                                id="rooms"
                                value={nrooms}
                                onChange={handleRoomChange}
                                className={inputs} placeholder='number of rooms' />
                        </div>
                        <div>
                            <p className='text-black rounded-lg p-2 font-bold'>Adults</p>
                            <input
                                type="number"
                                name="adults"
                                id="adults"
                                className={inputs} placeholder='number of adults' />
                        </div>
                        <div>
                            <p className='text-black rounded-lg p-2 font-bold'>Children</p>
                            <input
                                type="number"
                                name="children"
                                id="children"
                                className={inputs} placeholder='number of children' />
                        </div>
                    </div>
                    <Link to={{
                        pathname: '/booking',
                        state: {
                            nrooms: nrooms
                        }
                    }}>
                        <button type="submit" className='bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-400 transition duration-200'>Book</button>
                    </Link>
                </form> 
                */}
        </>

        <div className="w-full h-[auto] my-11">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center font-bold text-[3.5rem] md:text-[4.5rem]">
              <span className="text-gray-800">Events &</span>{" "}
              <span className="text-[#ffae00]">Blogs</span>
            </h1>
            <p className="text-center my-2 text-lg font-[400] special-offer-para text-gray-700 px-4 md:px-0">
              Escape to Paradise: Unwind in Luxury at Our Exclusive Resort!
            </p>
          </div>
          <div className="w-full h-[auto] flex justify-center mt-[3rem]">
            {/* <div className="w-[38rem] h-auto max-h-[45rem] items-center flex flex-col gap-10 bg-gradient-to-r from-fuchsia-600 to-pink-600 p-4 rounded-lg shadow-lg m-5"> */}
            {/* <p className="text-white text-lg font-semibold tracking-wide text-center h-auto overflow-y-auto overflow-hidden p-4 break-words"> */}
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61558992059697&tabs=timeline%2Cevents&width=365&height=480&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId"
              width="365"
              height="480"
              className="border-none overflow-hidden p-[10px] shadow-lg bg-gradient-to-r bg-[#ffae00] rounded-2xl"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
            {/* </p> */}
            {/* </div> */}
          </div>
        </div>

        <div className="w-full h-[auto]">
          {/* Special offer */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center font-bold text-[4.5rem] special-offer">
              <span className="text-gray-800">Special</span>{" "}
              <span className="text-[#ffae00]">Discount</span>
            </h1>
            <div className="text-center my-2 text-lg font-[400] special-offer-para">
              <p>
                Destination can be described where you are going, Like a
                traveler whose
              </p>
              <p>
                destination is Hills, Or a place that is known for a popular
                purpose.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center my-11 gap-10 md-device">
            <div className="w-[25rem] bg-white shadow-xl rounded-lg card">
              <div className="w-[25rem] h-[20rem] relative overflow-hidden rounded-t-lg card-img">
                <img
                  src={g3}
                  alt=""
                  className="w-[full] h-[25rem] object-cover transition duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center">
                  <p className="text-[1.5rem] font-bold tracking-wide">
                    ₹21000{" "}
                    <span className="line-through text-lg font-normal text-gray-500">
                      ₹24000
                    </span>
                  </p>
                  <p className="text-yellow-300 border border-yellow-300 px-2 rounded-xl">
                    offer
                  </p>
                </div>
                <p className="text-md tracking-wide text-gray-600 ">
                  (+Exclusive of all taxes)
                </p>
                <div className="grid grid-cols-2 gap-4 p-4 text-center font-[500]">
                  <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                    <img src={bed} alt="bed" className="w-[3rem] p-1" />1 Master
                    Bed
                  </p>
                  <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                    <img src={bath} alt="bath" className="w-[3rem] p-1" />1
                    Bathroom
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
                  <Link to="/booking">
                    <button className="bg-[#ffae00] text-white px-6 py-2 rounded-xl hover:bg-[#ffc352] duration-200">
                      Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[25rem] bg-white shadow-xl rounded-lg card">
              <div className="w-[25rem] h-[20rem] relative overflow-hidden rounded-t-lg card-img">
                <img
                  src={g9}
                  alt=""
                  className="w-[full] h-[25rem] object-cover transition duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center">
                  <p className="text-[1.5rem] font-bold tracking-wide">
                    ₹35000{" "}
                    <span className="line-through text-lg font-normal text-gray-500">
                      ₹40000
                    </span>
                  </p>
                  <p className="text-yellow-300 border border-yellow-300 px-2 rounded-xl">
                    offer
                  </p>
                </div>
                <p className="text-md tracking-wide text-gray-600 ">
                  (+Exclusive of all taxes)
                </p>
                <div className="grid grid-cols-2 gap-4 p-4 text-center font-[500]">
                  <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                    <img src={bed} alt="bed" className="w-[3rem] p-1" />1 Master
                    Bed
                  </p>
                  <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                    <img src={bath} alt="bath" className="w-[3rem] p-1" />1
                    Bathroom
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
                  <Link to="/booking">
                    <button className="bg-[#ffae00] text-white px-6 py-2 rounded-xl hover:bg-[#ffc352] duration-200">
                      Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[25rem] bg-white shadow-xl rounded-lg card">
              <div className="w-[25rem] h-[20rem] relative overflow-hidden rounded-t-lg card-img">
                <img
                  src={g2}
                  alt=""
                  className="w-[full] h-[25rem] object-cover transition duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center">
                  <p className="text-[1.5rem] font-bold tracking-wide">
                    ₹48000{" "}
                    <span className="line-through text-lg font-normal text-gray-500">
                      ₹56000
                    </span>
                  </p>
                  <p className="text-yellow-300 border border-yellow-300 px-2 rounded-xl">
                    offer
                  </p>
                </div>
                <p className="text-md tracking-wide text-gray-600 ">
                  (+Exclusive of all taxes)
                </p>
                <div className="grid grid-cols-2 gap-4 p-4 text-center font-[500]">
                  <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                    <img src={bed} alt="bed" className="w-[3rem] p-1" />1 Master
                    Bed
                  </p>
                  <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                    <img src={bath} alt="bath" className="w-[3rem] p-1" />1
                    Bathroom
                  </p>
                  <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                    <img src={breakfast} alt="food" className="w-[3rem] p-1" />
                    Breakfast
                  </p>
                  <p className="bg-slate-100 shadow-lg rounded-lg py-2">
                    <img src={night} alt="bedroom" className="w-[3rem] p-1" />7
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
                  <Link to="/booking">
                    <button className="bg-[#ffae00] text-white px-6 py-2 rounded-xl hover:bg-[#ffc352] duration-200">
                      Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // Why choose us Section */}
        <div className="w-full h-[auto] my-8">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center font-bold text-[3.5rem] md:text-[4.5rem]">
              <span className="text-gray-800">Why </span>
              <span className="text-[#ffae00]">Choose Us?</span>
            </h1>
            <p className="text-center my-2 text-lg font-[400] special-offer-para text-gray-700 px-4 md:px-0">
              Experience the ultimate in luxury and comfort at our resort, where
              exceptional service and stunning natural surroundings come
              together to create an unforgettable getaway.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center my-11 gap-10 md:flex-row md:justify-center md:items-center md-device">
            <div className="bg-white shadow-xl rounded-lg card w-[22rem] md:w-[25rem] h-[20rem] flex flex-col justify-center items-center transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-[1.7rem] md:text-[29px] font-bold mb-4">
                <span className="text-gray-800">Unparalleled</span>{" "}
                <span className="text-[#ffae00]">Amenities</span>
              </h2>
              <p className="text-lg font-[400] px-4 text-center text-gray-700">
                Indulge in our world-class amenities, from our luxurious spa to
                our state-of-the-art fitness center, ensuring your stay is
                nothing short of exceptional.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg card w-[22rem] md:w-[25rem] h-[20rem] flex flex-col justify-center items-center transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-[1.7rem] md:text-[2rem] font-bold mb-4 text-[#ffae00]">
                <span className="text-gray-800">Breathtaking</span>{" "}
                <span className="text-[#ffae00]">Scenery</span>
              </h2>
              <p className="text-lg font-[400] px-4 text-center text-gray-700">
                Immerse yourself in the stunning natural beauty that surrounds
                our resort, with panoramic views and serene landscapes that will
                leave you in awe.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg card w-[22rem] md:w-[25rem] h-[20rem] flex flex-col justify-center items-center transition-all duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-[1.7rem] md:text-[2rem] font-bold mb-4 text-[#ffae00]">
                <span className="text-gray-800">Exceptional</span>{" "}
                <span className="text-[#ffae00]">Service</span>
              </h2>
              <p className="text-lg font-[400] px-4 text-center text-gray-700">
                Our dedicated team of professionals is committed to providing
                you with personalized attention and ensuring your every need is
                met, making your stay truly unforgettable.
              </p>
            </div>
          </div>
        </div>

        {/* Amenties and Actiity section */}
        <div className="w-full h-[auto] my-8">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-center font-bold text-[3.5rem] md:text-[4.5rem] text-gray-800">
              <span className="text-gray-800">Amenities &</span>{" "}
              <span className="text-[#ffae00]">Activities</span>
            </h2>
            <p className="text-center my-2 text-lg font-[400] special-offer-para text-gray-600 px-4 md:px-0">
              Discover the endless possibilities for relaxation and adventure at
              our resort.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6 my-11">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-[1.8rem] font-bold text-[#ffae00] pb-4">
                    Amenities
                  </th>
                  <th className="text-[1.8rem] font-bold text-[#ffae00] pb-4">
                    Activities
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4">
                    <div className="flex items-center justify-center ml-[-3rem]">
                      <span className="text-[1.4rem] font-bold text-gray-800 mr-3">
                        •
                      </span>
                      <p className="text-gray-600 text-[1.1rem] font-medium a-and-a-p">
                        Luxurious Spa
                      </p>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center justify-center">
                      <span className="text-[1.4rem] font-bold text-gray-800 mr-3">
                        •
                      </span>
                      <p className="text-gray-600 text-[1.1rem] font-medium a-and-a-p">
                        Scenic Hiking Trails
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4">
                    <div className="flex items-center justify-center">
                      <span className="text-[1.4rem] font-bold text-gray-800 mr-3">
                        •
                      </span>
                      <p className="text-gray-600 text-[1.1rem] font-medium a-and-a-p">
                        State-of-the-Art Fitness Center
                      </p>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center justify-center">
                      <span className="text-[1.4rem] font-bold text-gray-800 mr-3">
                        •
                      </span>
                      <p className="text-gray-600 text-[1.1rem] font-medium a-and-a-p">
                        Exciting Sports
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4">
                    <div className="flex items-center justify-center">
                      <span className="text-[1.4rem] font-bold text-gray-800 mr-3">
                        •
                      </span>
                      <p className="text-gray-600 text-[1.1rem] font-medium a-and-a-p">
                        Refreshing Swimming Pools
                      </p>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center justify-center">
                      <span className="text-[1.4rem] font-bold text-gray-800 mr-3">
                        •
                      </span>
                      <p className="text-gray-600 text-[1.1rem] font-medium a-and-a-p">
                        Championship Golf Course
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="p-4 text-center">
            <p class="text-lg font-medium">
              <span className="text-[#ffae00] text-xl">Thank you </span>for
              visiting our website. We hope you found the information you were
              looking for and that it was helpful to you. If you have any
              questions or need further assistance, please don't hesitate to
              contact us.
              <span className="text-[#37a4d7] text-xl">
                We're here to help!
              </span>
            </p>
          </div>
        </div>

        <hr className="mt-[4rem] border-gray-400 w-[80%] mx-auto" />
        {/* Social media */}
        <div className="w-full h-[auto] flex flex-col justify-center items-center my-11 p-6 social-links">
          <h1 className="font-bold text-[4rem]">
            <span className="text-gray-800">Social</span>{" "}
            <span className="text-[#ffae00]">Links</span>
          </h1>
          <div className="w-full p-5 flex gap-[10rem]  items-center justify-center mt-[3rem] social-icons">
            <a target="_blank" href="https://wa.me/917906075750">
              <img
                src={whatsapp}
                alt="whatsapp"
                className="w-[4rem] h-[4rem] hover:scale-125 duration-200"
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/the_grand_view_resort/?igsh=MWticm01eXdxcTQ4dg%3D%3D&utm_source=qr"
            >
              <img
                src={instagram}
                alt="instagram"
                className="w-[4rem] h-[4rem] hover:scale-125 duration-200"
              />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61558992059697"
            >
              <img
                src={facebook}
                alt="facebook"
                className="w-[4rem] h-[4rem] hover:scale-125 duration-200"
              />
            </a>

            <a target="_blank" href="https://www.youtube.com">
              <img
                src={youtube}
                alt="youtube"
                className="w-[4rem] h-[4rem] hover:scale-125 duration-200"
              />
            </a>
          </div>
          <div className="w-full p-5 flex gap-[10rem]  items-center justify-center mt-[3rem]">
            <Feedback />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
