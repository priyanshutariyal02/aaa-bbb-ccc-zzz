import React from 'react'
import HomeImg from '../components/HomeImg';
import transfer from '../assets/icons/transfer.png'
import resortImg from '../assets/resort1.avif'
import { bed, bath, food, bedroom, location } from "../assets/icons/icon.js";
import Footer from '../components/Footer.jsx';

const Home = () => {
    const inputs = "border border-black w-[15rem] h-[3rem] px-3 outline-none rounded-lg"
    return (
        <>
            <div className="bg-slate-300/20 flex flex-col justify-center items-center">
                <HomeImg />
                <div className="w-[70%] h-[auto] bg-white my-10 shadow-xl rounded-xl flex flex-col gap-10 justify-center items-center py-6 hotel-rev" >
                    <div className='flex gap-20 items-center check-in-out'>
                        <div>
                            <p className='text-black p-2 font-bold'>Check in</p>
                            <input type="date" name="checkin" id="checkin" className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                        </div>

                        <img src={transfer} alt="transfer_img" className='w-[3rem] h-[3rem] object-cover' />

                        <div>
                            <p className='text-black rounded-lg p-2 font-bold'>Check out</p>
                            <input type="date" name="checkin" id="checkin" className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                        </div>
                    </div>

                    <div className='flex gap-20 gusts'>
                        <div>
                            <p className='text-black rounded-lg p-2 font-bold'>Rooms</p>
                            <input type="number" name="rooms" id="" className={inputs} placeholder='number of rooms' />
                        </div>
                        <div>
                            <p className='text-black rounded-lg p-2 font-bold'>Adults</p>
                            <input type="number" name="adults" id="" className={inputs} placeholder='number of adults' />
                        </div>
                        <div>
                            <p className='text-black rounded-lg p-2 font-bold'>Children</p>
                            <input type="number" name="children" id="" className={inputs} placeholder='number of children' />
                        </div>
                    </div>
                </div>

                <div className='w-full h-[auto] my-8'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-center font-bold text-[4.5rem] md:text-[3rem]'>Special Offers</h1>
                        <div className='text-center my-2 text-lg font-[400] special-offer-para'>
                            <p>Destination can be described where you are going, Like a traveler whose</p>
                            <p>destination is Paris, Or a place that is known for a popular purpose.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center my-11 gap-10 md-device'>
                        <div className='bg-white shadow-xl rounded-lg card'>

                            <div className='w-[25rem] h-[20rem] relative overflow-hidden rounded-t-lg card-img'>
                                <img src={resortImg} alt="" className='transition duration-300 ease-in-out hover:scale-110' />
                            </div>

                            <div className='p-10'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[1.5rem] font-bold'>₹5000</p>
                                    <p className='text-yellow-300 border border-yellow-300 px-2 rounded-xl'>offer</p>
                                </div>
                                <div className='grid grid-cols-2 gap-4 p-4 text-center font-[500]'>
                                    <p className='bg-slate-100 shadow-lg rounded-lg py-2'><img src={bed} alt="bed" className='w-[30px]' />2 Beds</p>
                                    <p className='bg-slate-100 shadow-lg rounded-lg py-2'><img src={bath} alt="bath" className='w-[30px]' />1 Bath</p>
                                    <p className='bg-slate-100 shadow-lg rounded-lg py-2'><img src={food} alt="food" className='w-[30px]' />Food</p>
                                    <p className='bg-slate-100 shadow-lg rounded-lg py-2'><img src={bedroom} alt="bedroom" className='w-[30px]' />Bedroom</p>
                                </div>

                                <div className='flex gap-2 items-center p-4'>
                                    <img src={location} alt="location" className='w-[20px]' />
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className='text-right my-2'>
                                    <button className='bg-[#ffae00] text-white px-3 py-2 rounded-xl hover:bg-[#ffc352] duration-200'>view details</button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white shadow-xl rounded-lg card'>

                            <div className='w-[25rem] h-[20rem] relative overflow-hidden rounded-t-lg card-img'>
                                <img src={resortImg} alt="" className='transition duration-300 ease-in-out hover:scale-110' />
                            </div>

                            <div className='p-10'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[1.5rem] font-bold'>₹5000</p>
                                    <p className='text-yellow-300 border border-yellow-300 px-2 rounded-xl'>offer</p>
                                </div>
                                <div className='grid grid-cols-2 gap-4 p-4 text-center font-[500]'>
                                    <p className='bg-slate-100 shadow-lg rounded-lg py-2'><img src={bed} alt="bed" className='w-[30px]' />2 Beds</p>
                                    <p className='bg-slate-100 shadow-lg rounded-lg py-2'><img src={bath} alt="bath" className='w-[30px]' />1 Bath</p>
                                    <p className='bg-slate-100 shadow-lg rounded-lg py-2'><img src={food} alt="food" className='w-[30px]' />Food</p>
                                    <p className='bg-slate-100 shadow-lg rounded-lg py-2'><img src={bedroom} alt="bedroom" className='w-[30px]' />Bedroom</p>
                                </div>

                                <div className='flex gap-2 items-center p-4'>
                                    <img src={location} alt="location" className='w-[20px]' />
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className='text-right my-2'>
                                    <button className='bg-[#ffae00] text-white px-3 py-2 rounded-xl hover:bg-[#ffc352] duration-200'>view details</button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white shadow-xl rounded-lg card'>

                            <div className='w-[25rem] h-[20rem] relative overflow-hidden rounded-t-lg card-img'>
                                <img src={resortImg} alt="" className='transition duration-300 ease-in-out hover:scale-110' />
                            </div>

                            <div className='p-10'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[1.5rem] font-bold'>₹5000</p>
                                    <p className='text-yellow-300 border border-yellow-300 px-2 rounded-xl'>offer</p>
                                </div>
                                <div className='grid grid-cols-2 gap-4 p-4 text-center font-[500]'>
                                    <p className='bg-slate-100 shadow-lg rounded-lg py-2'><img src={bed} alt="bed" className='w-[30px]' />2 Beds</p>
                                    <p className='bg-slate-100 shadow-lg rounded-lg py-2'><img src={bath} alt="bath" className='w-[30px]' />1 Bath</p>
                                    <p className='bg-slate-100 shadow-lg rounded-lg py-2'><img src={food} alt="food" className='w-[30px]' />Food</p>
                                    <p className='bg-slate-100 shadow-lg rounded-lg py-2'><img src={bedroom} alt="bedroom" className='w-[30px]' />Bedroom</p>
                                </div>

                                <div className='flex gap-2 items-center p-4'>
                                    <img src={location} alt="location" className='w-[20px]' />
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className='text-right my-2'>
                                    <button className='bg-[#ffae00] text-white px-3 py-2 rounded-xl hover:bg-[#ffc352] duration-200'>view details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;