import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-3xl h-full mx-auto sm:p-16 pb-10 !pt-[10rem] px-8 min-h-[calc(100vh-80px)'>
      <div className='flex justify-start'>
        <h1 className='font-[600] text-[3rem] '>Get in Touch</h1>
      </div>
      <div className='w-[90%] flex flex-col justify-start items-center'>
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

    </div>
  )
}

export default Contact;