// src/pages/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 leading-7 mb-4">
        We would love to hear from you! If you have any questions or need assistance, please feel free to reach out.
      </p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Customer Service</h2>
        <p>Email: support@quickcart.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>
      <form className="max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input type="text" id="name" className="border border-gray-300 rounded-md p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="border border-gray-300 rounded-md p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea id="message" className="border border-gray-300 rounded-md p-2 w-full" rows="4" required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
