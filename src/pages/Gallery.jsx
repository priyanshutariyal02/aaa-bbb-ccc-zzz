import React from 'react'
import resort1 from '../assets/resort1.avif'
import Footer from '../components/Footer';
const Gallery = () => {
    return (
        <div className='w-full h-full pt-[10rem]'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold text-[4.5rem]'>Our Gallery</h1>
                <div className='text-center my-2 text-lg font-[400]'>
                    <p>The gallery is about looking at a thing of beauty;</p>
                    <p>The purpose of the activity is an aesthetic response.</p>
                </div>
                <div className='my-11 flex gap-10 '>

                    <div className='w-[25rem] relative overflow-hidden'>
                        <a href={resort1}><img src={resort1} alt="" className='transition duration-300 ease-in-out hover:scale-110' /></a>
                    </div>
                    <div className='w-[25rem] relative overflow-hidden'>
                        <a href={resort1}><img src={resort1} alt="" className='transition duration-300 ease-in-out hover:scale-110' /></a>
                    </div>
                    <div className='w-[25rem] relative overflow-hidden'>
                        <a href={resort1}><img src={resort1} alt="" className='transition duration-300 ease-in-out hover:scale-110' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;