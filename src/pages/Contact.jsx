import React from 'react'
import Footer from '../components/Footer';
import { whatsapp,call } from '../assets/icons/icon';
const Contact = () => {
  return (
    <>
      <div className='max-w-3xl min-h-[100vh] mx-auto sm:p-16 pb-10 !pt-[10rem] px-8'>
        <div className='flex justify-center'>
          <h1 className='font-bold text-[3rem] '>Get in Touch</h1>
        </div>
        <div className='w-[90%] flex flex-col justify-center items-center'>
          <form className='w-full flex flex-col gap-7 mt-16'>
            <label className='text-black-500 font-semibold'>
              Name
              <input
                type='text'
                name='name'
                className='input'
                placeholder='John'
              />
            </label>
            <label className='text-black-500 font-semibold'>
              Email
              <input
                type='email'
                name='email'
                className='input'
                placeholder='xyz@gmail.com'
              />
            </label>

            <label className='text-black-500 font-semibold'>
              Your Message
              <textarea
                name='message'
                rows='4'
                className='textarea'
                placeholder='Write your thoughts here...'
              />
            </label>
            <button type="submit" className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Submit</button>
          </form>
        </div>
        <div className='flex gap-5 justify-center items-center mt-11'>
          <hr className='border-gray-400 w-[50%] mx-auto' /><span className='text-gray-500 font-semibold'>OR</span><hr className='border-gray-400 w-[50%] mx-auto' />

        </div>
        {/* Social media */}
        <div className='w-full h-[auto] flex flex-col my-10 social-links'>
          <p className='font-semibold'>Direct contact:</p>
          <div className='w-full p-5 flex gap-[5rem]  items-center justify-start mt-[3rem] social-icons'>
            <img src={whatsapp} alt="whatsapp" className='w-[4rem] h-[4rem] hover:scale-125 duration-200' />
            <img src={call} alt="whatsapp" className='w-[4rem] h-[4rem] hover:scale-125 duration-200' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;