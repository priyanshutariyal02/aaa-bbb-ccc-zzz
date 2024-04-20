import React from 'react'
import { Link } from "react-router-dom";
const Proceed = () => {
    return (
        <div className='w-full min-h-[100vh]'>
            <div className='w-full min-h-[100vh] flex justify-center items-center'>
                <div className='bg-green-50 w-[40rem] h-[20rem] border-2 border-green-500 flex items-center justify-center flex-col proceed-message'>
                    <h1 className='text-[4rem] font-bold'>Thank you!</h1>
                    <p className='text-[1.3rem] font-semibold'>your booking has been successful!</p>
                    <Link to='/'>
                        <button className='mt-10 bg-green-600 text-white px-10 py-2 rounded-md hover:bg-green-500 transition-all duration-300 ease-in-out'>Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Proceed;