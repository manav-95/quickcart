// src/pages/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">About Us</h1>
      
      {/* Introduction */}
      <section className="mb-8">
        <p className="text-gray-700 leading-7 mb-4">
          Welcome to QuickCart, your one-stop shop for everything you need! Founded in 2024, QuickCart aims to provide a seamless online shopping experience with a vast selection of products from electronics to fashion and beyond.
        </p>
        <p className="text-gray-700 leading-7">
          We are committed to bringing the best shopping experience to our customers, making it easy to find the products you love, delivered right to your door.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Our Mission</h2>
        <p className="text-gray-700 leading-7 mb-4">
          Our mission is to deliver top-quality products at the best prices while creating a shopping platform that’s fast, secure, and accessible to everyone. 
        </p>
        <p className="text-gray-700 leading-7">
          We believe in empowering our customers to make informed decisions and enjoy an effortless shopping experience from start to finish.
        </p>
      </section>

      {/* Vision */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Our Vision</h2>
        <p className="text-gray-700 leading-7 mb-4">
          We strive to be a leading e-commerce platform that offers not only exceptional products but also exceptional service, continuously improving to meet the evolving needs of our customers.
        </p>
        <p className="text-gray-700 leading-7">
          Our vision is to become a globally recognized brand, known for delivering value, quality, and a memorable shopping experience.
        </p>
      </section>

      {/* Core Values */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Core Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Customer-Centric:</strong> We prioritize the needs and satisfaction of our customers in everything we do.</li>
          <li><strong>Integrity:</strong> We maintain the highest standards of honesty, transparency, and fairness.</li>
          <li><strong>Innovation:</strong> We embrace technology and creativity to continually improve our platform and services.</li>
          <li><strong>Quality:</strong> We only offer products that meet the highest standards of quality and reliability.</li>
          <li><strong>Sustainability:</strong> We are committed to environmental responsibility and sustainable business practices.</li>
        </ul>
      </section>

      {/* Our History */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Our History</h2>
        <p className="text-gray-700 leading-7 mb-4">
          QuickCart was founded in [Year] by a group of passionate individuals with a vision to create a seamless online shopping experience. Starting with just a handful of products, we’ve grown to offer thousands of items across multiple categories, all while maintaining our commitment to customer satisfaction.
        </p>
        <p className="text-gray-700 leading-7">
          From humble beginnings, we’ve expanded our reach to serve customers around the globe, always striving to improve and innovate. 
        </p>
      </section>

      {/* Our Team */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Meet Our Team</h2>
        <p className="text-gray-700 leading-7 mb-4">
          Our team is made up of passionate and dedicated individuals from diverse backgrounds, all united by a common goal: to provide an exceptional shopping experience for our customers. From product sourcing to customer service, each member plays a vital role in ensuring that QuickCart runs smoothly.
        </p>
        <p className="text-gray-700 leading-7 mb-4">
          We are continuously looking for talented individuals to join our team and help us shape the future of e-commerce.
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
          Join Our Team
        </button>
      </section>

      {/* Customer Testimonials */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">What Our Customers Say</h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 pl-4 text-gray-700">
            <p className="italic">"QuickCart has transformed my shopping experience! The website is so easy to use, and my orders always arrive on time. Highly recommend!"</p>
            <footer className="mt-2 font-semibold">– Aditya Upadhaya</footer>
          </blockquote>
          <blockquote className="border-l-4 pl-4 text-gray-700">
            <p className="italic">"I love how QuickCart makes shopping fun. I can always find great deals, and the customer service is top-notch!"</p>
            <footer className="mt-2 font-semibold">– Chaitanya Mhatre</footer>
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 p-6 text-center rounded-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Join Us Today!</h2>
        <p className="text-gray-700 mb-4">
          Ready to experience QuickCart? Join the millions of customers who trust us for their shopping needs.
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
          Start Shopping
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
