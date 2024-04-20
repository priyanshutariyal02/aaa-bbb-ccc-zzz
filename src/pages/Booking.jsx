import React from 'react';
import { useLocation } from "react-router-dom";
const Booking = () => {
    let location = useLocation();
    let room = location.state;

    return (
        <div className='w-full min-h-[100vh] pt-[10rem] '>
            <div className='w-full h-screen flex booking-page'>
                {/* Form  */}
                <form className='w-[60%] h-[70vh]'>
                    <div className='w-full h-full shadow-xl flex flex-col gap-10 justify-center items-center bg-white booking-container'>
                        <div className='grid grid-cols-2 gap-8 justify-center book-inp'>
                            <div>
                                <p className='text-black p-2 font-bold'>Name</p>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder='Ex: John Doe' className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' required autoFocus />
                            </div>
                            <div>
                                <p className='text-black p-2 font-bold'>Phone</p>
                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder='10-digit phone number' className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-8 justify-center book-inp'>
                            <div>
                                <p className='text-black p-2 font-bold'>Email</p>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder='Ex: johndoe@gmail.com' className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                            </div>
                            <div>
                                <p className='text-black p-2 font-bold'>Check in</p>
                                <input
                                    type="date"
                                    name="checkin"
                                    id="checkin" className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-8 justify-center book-inp'>
                            <div>
                                <p className='text-black p-2 font-bold'>Check out</p>
                                <input
                                    type="date"
                                    name="checkout"
                                    id="checkout" className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                            </div>
                            <div>
                                <p className='text-black p-2 font-bold'>Rooms</p>
                                <input
                                    type="number"
                                    name="rooms"
                                    id="rooms"
                                    value={room}
                                    placeholder='number of rooms' className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-8 justify-center book-inp'>
                            <div>
                                <p className='text-black p-2 font-bold'>Adults</p>
                                <input
                                    type="number
                                " name="adults"
                                    id="adults"
                                    placeholder='number of adults' className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                            </div>
                            <div>
                                <p className='text-black p-2 font-bold'>Children</p>
                                <input
                                    type="number
                                " name="children"
                                    id="children"
                                    placeholder='number of children' className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                            </div>
                        </div>
                        <div className='flex justify-center gap-10'>
                            <button
                                type="submit
                            " className='bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-400 transition duration-200'>reset</button>
                            <button
                                type="reset"
                                className='bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-400 transition duration-200'>submit</button>
                        </div>


                    </div>
                </form>

                {/* Booking Details */}
                <div className='w-[40%] h-[70%] border-4 border-black text-black booking-details'>
                    <div className='container h-full flex flex-col gap-10 justify-center items-center'>
                        <h1 className='font-bold text-6xl mb-8'>Booking Details</h1>
                        <table className='border-collapse w-full grid items-center justify-center text-lg'>
                            <tbody>
                                <tr className='border-b border-black px-5'>
                                    <th className='p-2 text-left'>Name:</th>
                                    <td className='p-2'>John Doe</td>
                                </tr>
                                <tr className='border-b border-black'>
                                    <th className='p-2 text-left'>Phone:</th>
                                    <td className='p-2'>10-digit phone number</td>
                                </tr>
                                <tr className='border-b border-black'>
                                    <th className='p-2 text-left'>Number of days:</th>
                                    <td className='p-2'>3</td>
                                </tr>
                                <tr className='text-4xl'>
                                    <th className='p-2 text-left'>Total:</th>
                                    <td className='p-2 font-bold'>${100 * 3}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='bg-green-500 text-white py-2 px-[4rem] rounded-lg hover:bg-green-400 transition duration-200 mt-4 font-bold'>Pay</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Booking;