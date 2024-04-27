import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">The Grand View Resort</h3>
          <p className="text-gray-400 mb-4">
            Escape to the tranquility of our luxurious resort, where nature and
            comfort converge.
          </p>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} The Grand View Resort. All rights
            reserved.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/gallery" className="text-gray-400 hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                contact
              </a>
            </li>
            {/* <li>
              <a href="/blog" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </li> */}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-2">BurasKhanda Dehradun</p>
          <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
          <p className="text-gray-400 mb-2">
            Email: thegrandviewresort@gmail.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
