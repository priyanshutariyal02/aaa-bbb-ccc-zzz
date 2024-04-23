import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

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

const Gallery = () => {
  return (
    <div className="w-full min-h-[100vh] pt-[10rem]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-[4.5rem] text-center">Our Gallery</h1>
        <div className="text-center mb-8 my-2 text-lg font-[400] gallery-para">
          <p>The gallery is about looking at a thing of beauty;</p>
          <p>The purpose of the activity is an aesthetic response.</p>
        </div>
        <div className="my-[4rem] grid grid-cols-3 gap-10 gallery-img">
          <div className="w-[20rem] relative overflow-hidden">
            <a href={g1}>
              <img
                src={g1}
                alt=""
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
          <div className="w-[20rem] relative overflow-hidden">
            <a href={g2}>
              <img
                src={g2}
                alt=""
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
          <div className="w-[20rem] relative overflow-hidden">
            <a href={g3}>
              <img
                src={g3}
                alt=""
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
          <div className="w-[20rem] relative overflow-hidden">
            <video
              src={video1}
              controls
              className="transition duration-300 ease-in-out"
              autoPlay
              loop
            />
          </div>
          <div className="w-[20rem] relative overflow-hidden">
            <video
              src={video2}
              controls
              className="transition duration-300 ease-in-out"
              autoPlay
              loop
            />
          </div>
          <div className="w-[20rem] relative overflow-hidden">
            <a href={g4}>
              <img
                src={g4}
                alt=""
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
          <div className="w-[20rem] relative overflow-hidden">
            <a href={g5}>
              <img
                src={g5}
                alt=""
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
          <div className="w-[20rem] relative overflow-hidden">
            <a href={g6}>
              <img
                src={g6}
                alt=""
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
          <div className="w-[20rem] relative overflow-hidden">
            <a href={g7}>
              <img
                src={g7}
                alt=""
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
          <div className="w-[20rem] relative overflow-hidden">
            <a href={g8}>
              <img
                src={g8}
                alt=""
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
          <div className="w-[20rem] relative overflow-hidden">
            <a href={g9}>
              <img
                src={g9}
                alt=""
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
          <div className="w-[20rem] relative overflow-hidden">
            <a href={g10}>
              <img
                src={g10}
                alt=""
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
          <div className="w-[20rem] relative overflow-hidden">
            <a href={g11}>
              <img
                src={g11}
                alt=""
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
          <div className="w-[20rem] relative overflow-hidden">
            <a href={g12}>
              <img
                src={g12}
                alt=""
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
          <div className="w-[20rem] relative overflow-hidden">
            <a href={g13}>
              <img
                src={g13}
                alt=""
                className="transition duration-300 ease-in-out hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
