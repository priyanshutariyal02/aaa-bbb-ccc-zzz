import React, { useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = ({ logo }) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.classList.remove("responsive_nav");
    }
  }, []);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="bg-black flex justify-between items-center sm:px-16 px-8 py-4 max-w-[115rem] mx-auto absolute top-0 bg-transparent z-10 right-0 left-0">
      <NavLink to="/">
        <img
          src={logo}
          alt="logo"
          className="w-[160px] h-[70px] object-cover rounded-lg shadow-md home-logo"
        />
      </NavLink>

      <button
        onClick={showNavbar}
        className="nav-btn bg-white rounded-xl p-3 shadow-md  text-[1.5rem]"
      >
        <FaBars />
      </button>

      <nav
        ref={navRef}
        className="flex text-lg gap-[10rem] font-medium md-device"
      >
        <div className="nav-mobile flex gap-10">
          <NavLink
            onClick={showNavbar}
            exact
            to="/"
            className="w-[6rem] h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:text-[#ff3b65] duration-200"
          >
            Home
          </NavLink>
          <NavLink
            onClick={showNavbar}
            exact
            to="/gallery"
            className="w-[6rem] h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:text-[#ff3b65] duration-200"
          >
            Gallery
          </NavLink>
          <NavLink
            onClick={showNavbar}
            to="/about"
            className="w-[6rem] h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:text-red hover:text-[#ff3b65] duration-200"
          >
            About
          </NavLink>
          <NavLink
            onClick={showNavbar}
            to="/contact"
            className="w-[6rem] h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:text-red hover:text-[#ff3b65] duration-200"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={showNavbar}
            to="/booking"
            className="w-[6rem] h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:text-red hover:text-[#ff3b65] duration-200"
          >
            Booking
          </NavLink>
          {/* <NavLink onClick={showNavbar} to='/blog' className='w-[6rem] h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:text-red hover:text-[#ff3b65] duration-200'>
                        Blog
                    </NavLink> */}
        </div>

        <button
          onClick={showNavbar}
          className="bg-white rounded-xl p-3 shadow-md nav-btn nav-close-btn absolute z-[999] top-0 right-0 m-5 text-[1.5rem]"
        >
          <FaTimes />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
