import React, { useState } from 'react';


const Booking = () => {

    const [enteredValues, setEnteredValues] = useState({
        name: '',
        phone: '',
        email: '',
        checkin: '',
        checkout: '',
        rooms: '',
        adults: '',
        children: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.target);
        setEnteredValues({
            name: fd.get('name'),
            phone: fd.get('phone'),
            email: fd.get('email'),
            checkin: fd.get('checkin'),
            checkout: fd.get('checkout'),
            rooms: fd.get('rooms'),
            adults: fd.get('adults'),
            children: fd.get('children')
        });
        const data = Object.fromEntries(fd.entries());
        console.log(data);
        console.log(enteredValues);
        // e.target.reset();
    }


    function calculateNumberOfDays(checkin, checkout) {
        // Parse the check-in and check-out dates
        const checkinDate = new Date(checkin);
        const checkoutDate = new Date(checkout);

        // Calculate the difference in milliseconds
        const differenceInMs = checkoutDate - checkinDate;

        // Convert milliseconds to days
        const daysDifference = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

        return daysDifference;
    }

    const days = calculateNumberOfDays(enteredValues.checkin, enteredValues.checkout);

    return (
        <div className='w-full min-h-[100vh] pt-[10rem] '>
            <div className='w-full h-screen flex booking-page'>
                {/* Form  */}
                <form onSubmit={handleSubmit} className='w-[60%] h-[70vh]'>
                    <div className='w-full h-full shadow-xl flex flex-col gap-10 justify-center items-center bg-white booking-container'>
                        <div className='grid grid-cols-2 gap-8 justify-center book-inp'>
                            <div>
                                <p className='text-black p-2 font-bold'>Name <span className='text-red-500'>*</span></p>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    // value={enteredValues.name}
                                    // onChange={(e) => handleInputChange('name', e.target.value)}

                                    placeholder='Ex: John Doe' className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' required autoFocus />
                            </div>
                            <div>
                                <p className='text-black p-2 font-bold'>Phone <span className='text-red-500'>*</span></p>
                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    // value={enteredValues.phone}
                                    // onChange={(e) => handleInputChange('phone', e.target.value)}
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
                                    // value={enteredValues.email}
                                    // onChange={(e) => handleInputChange('email', e.target.value)}
                                    placeholder='Ex: johndoe@gmail.com' className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                            </div>
                            <div>
                                <p className='text-black p-2 font-bold'>Check in <span className='text-red-500'>*</span></p>
                                <input
                                    type="date"
                                    name="checkin"
                                    // value={enteredValues.checkin}
                                    // onChange={(e) => handleInputChange('checkin', e.target.value)}
                                    id="checkin" className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-8 justify-center book-inp'>
                            <div>
                                <p className='text-black p-2 font-bold'>Check out <span className='text-red-500'>*</span></p>
                                <input
                                    type="date"
                                    name="checkout"
                                    // value={enteredValues.checkout}
                                    // onChange={(e) => handleInputChange('checkout', e.target.value)}
                                    id="checkout" className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                            </div>
                            <div>
                                <p className='text-black p-2 font-bold'>Rooms <span className='text-red-500'>*</span></p>
                                <input
                                    name="rooms"
                                    type="number"
                                    id="rooms"
                                    // value={enteredValues.rooms}
                                    // onChange={(e) => handleInputChange('rooms', e.target.value)}

                                    placeholder='number of rooms' className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-8 justify-center book-inp'>
                            <div>
                                <p className='text-black p-2 font-bold'>Adults</p>
                                <input
                                    type="number"
                                    name="adults"
                                    id="adults"
                                    // value={enteredValues.adults}
                                    // onChange={(e) => handleInputChange('adults', e.target.value)}
                                    placeholder='number of adults' className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                            </div>
                            <div>
                                <p className='text-black p-2 font-bold'>Children</p>
                                <input
                                    type="number"
                                    name="children"
                                    id="children"
                                    // value={enteredValues.children}
                                    // onChange={(e) => handleInputChange('children', e.target.value)}
                                    placeholder='number of children' className='border border-black w-[20rem] h-[3rem] px-3 outline-none rounded-lg' />
                            </div>
                        </div>
                        <div className='flex justify-center gap-10'>
                            <button
                                type="reset"
                                className='bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-400 transition duration-200'>reset</button>
                            <button
                                type="submit"
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
                                    <td className='p-2'>{enteredValues.name ? enteredValues.name : undefined}</td>
                                </tr>
                                <tr className='border-b border-black'>
                                    <th className='p-2 text-left'>Phone:</th>
                                    <td className='p-2'>{enteredValues.phone ? enteredValues.phone : undefined}</td>
                                </tr>
                                <tr className='border-b border-black'>
                                    <th className='p-2 text-left'>Number of days:</th>
                                    <td className='p-2'>{days ? days : undefined}</td>
                                </tr>
                                <tr className='text-4xl'>
                                    <th className='p-2 text-left'>Total:</th>
                                    <td className='p-2 font-bold'>₹{100 * days}</td>
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