import React from 'react'
import resort1 from '../assets/resort1.avif'
import Footer from '../components/Footer';

const Gallery = () => {
    return (
        <div className='w-full h-screen pt-[10rem]'>
            <div className='flex flex-col justify-center items-center'>

                <h1 className='font-bold text-[4.5rem] text-center'>Our Gallery</h1>
                <div className='text-center mb-8 my-2 text-lg font-[400] gallery-para'>
                    <p>The gallery is about looking at a thing of beauty;</p>
                    <p>The purpose of the activity is an aesthetic response.</p>
                </div>

                <div className='my-[4rem] grid grid-cols-3 gap-10 gallery-img'>

                    <div className='w-[20rem] relative overflow-hidden'>
                        <a href={resort1}><img src={resort1} alt="" className='transition duration-300 ease-in-out hover:scale-110' /></a>
                    </div>
                    <div className='w-[20rem] relative overflow-hidden'>
                        <a href={resort1}><img src={resort1} alt="" className='transition duration-300 ease-in-out hover:scale-110' /></a>
                    </div>
                    <div className='w-[20rem] relative overflow-hidden'>
                        <a href={resort1}><img src={resort1} alt="" className='transition duration-300 ease-in-out hover:scale-110' /></a>
                    </div>
                </div>
            </div>
            <div className='lg:mt-32'>
                <Footer />
            </div>
        </div>
    )
}

export default Gallery;