import React from 'react';
import { NavLink } from 'react-router-dom';
import { instagram, facebook, youtube, whatsapp } from '../assets/icons/icon';
const Navbar = ({ logo }) => {

    return (
        <header className='bg-black flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0'>
            <NavLink to="/" className='w-[233px] h-[60px]'>
                <img src={logo} alt="logo" className='w-[233px] h-[60px] object-cover rounded-lg shadow-md' />
            </NavLink>

            <nav className="flex text-lg gap-7 font-medium">
                <NavLink exact to='/' className='w-[5rem] h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:text-[#ff3b65] duration-200'>
                    Home
                </NavLink>
                <NavLink exact to='/gallery' className='w-[5rem] h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:text-[#ff3b65] duration-200'>
                    Gallery
                </NavLink>
                <NavLink to='/about' className='w-[5rem] h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:text-red hover:text-[#ff3b65] duration-200'>
                    About
                </NavLink>
                <NavLink to='/contact' className='w-[5rem] h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:text-red hover:text-[#ff3b65] duration-200'>
                    Contact
                </NavLink>
                <NavLink to='/blog' className='w-[5rem] h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md hover:text-red hover:text-[#ff3b65] duration-200'>
                    Blog
                </NavLink>
            </nav>

            <div className='flex w-[3rem] h-[3rem] gap-4 items-center justify-normal'>
                <img src={whatsapp} alt="whatsapp" className='w-[30px] h-[30px] hover:scale-125 duration-200' />
                <img src={instagram} alt="instagram" className='w-[30px] h-[30px] hover:scale-125 duration-200' />
                <img src={facebook} alt="facebook" className='w-[30px] h-[30px] hover:scale-125 duration-200' />
                <img src={youtube} alt="youtube" className='w-[30px] h-[30px] hover:scale-125 duration-200' />
            </div>
        </header>
    )
}

export default Navbar;
