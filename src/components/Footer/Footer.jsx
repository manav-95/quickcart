// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">QuickCart</h2>
          <p className="text-gray-400">
            QuickCart is your one-stop shop for all things fashion, electronics, and more. Discover amazing deals on high-quality products.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/help" className="hover:text-white">Help & FAQs</a></li>
            <li><a href="/shipping" className="hover:text-white">Shipping & Delivery</a></li>
            <li><a href="/returns" className="hover:text-white">Returns & Exchanges</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Connected</h3>
          <p className="text-gray-400 mb-3">Subscribe to our newsletter for the latest updates and offers.</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Subscribe</button>
          </form>
          <div className="flex space-x-4 mt-6 text-gray-400">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} QuickCart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
