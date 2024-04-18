import React from 'react'
import resort1 from '../assets/resort1.avif'
const About = () => {
  return (
    <>
      <section className="bg-gray-100 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[4rem]">
          <div className="flex flex-row-reverse gap-8 items-center about-section">
            <div className="relative overflow-hidden">
              <img
                src={resort1}
                alt="About Us"
                className="rounded-md shadow-lg transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are a team of passionate individuals dedicated to creating innovative solutions that
                make a difference. Our mission is to empower our clients and help them achieve their
                goals through cutting-edge technology and personalized service.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With years of experience in the industry, we have developed a deep understanding of
                the challenges our clients face. We use this knowledge to tailor our services and
                deliver results that exceed expectations.
              </p>
              <a
                href="/"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Home
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default About;