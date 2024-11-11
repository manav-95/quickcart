// src/pages/Services.js
import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Our Services</h1>
      
      {/* Introduction */}
      <section className="mb-8">
        <p className="text-gray-700 leading-7 mb-4">
          At QuickCart, we are committed to providing a variety of services designed to enhance your shopping experience. Whether you're looking for a vast product selection, fast delivery, or top-notch customer support, we have you covered. Here are the key services we offer:
        </p>
      </section>

      {/* Services List */}
      <section className="mb-8">
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Extensive Product Range</h2>
            <p className="leading-7">
              We offer a wide array of products from electronics, fashion, home goods, beauty, and more. Whatever you're looking for, you're sure to find it at QuickCart. We carefully curate our product catalog to include only the best and most popular items, ensuring that you have access to top-quality products.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Fast Shipping</h2>
            <p className="leading-7">
              Our fast and reliable shipping services ensure that your orders arrive quickly. We offer both standard and express shipping options, so you can choose the best delivery method that suits your needs. For select items, we even provide same-day or next-day delivery in certain locations.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Secure Payments</h2>
            <p className="leading-7">
              Shop with peace of mind using our secure payment options. We support multiple payment methods, including credit cards, debit cards, PayPal, and more. All transactions are encrypted with the highest level of security, ensuring that your payment information is always safe.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">24/7 Customer Support</h2>
            <p className="leading-7">
              Our customer support team is always here to assist you with any inquiries or issues you may have. Whether you need help with your order, have a question about a product, or need assistance with returns, we’re available around the clock to ensure you have the best shopping experience.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Easy Returns & Exchanges</h2>
            <p className="leading-7">
              We want you to be completely satisfied with your purchase. If you're not happy with your order, our easy returns and exchanges process makes it simple to send items back. We offer hassle-free returns within [X] days for most products, so you can shop with confidence.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Gift Cards & Promotions</h2>
            <p className="leading-7">
              We offer gift cards and seasonal promotions so you can give the perfect gift or save on your next purchase. Take advantage of our exclusive deals and discounts to make your shopping even more rewarding.
            </p>
          </li>
        </ul>
      </section>

      {/* Case Studies or Testimonials */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Why Customers Love Our Services</h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 pl-4 text-gray-700">
            <p className="italic">"The product range at QuickCart is amazing! I always find exactly what I need, and the delivery is so quick." - Manav S.</p>
          </blockquote>
          <blockquote className="border-l-4 pl-4 text-gray-700">
            <p className="italic">"I had an issue with my order, but their customer support was so helpful and resolved it within minutes. I'm definitely coming back!" - Sukalp T.</p>
          </blockquote>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 p-6 text-center rounded-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Experience QuickCart Today!</h2>
        <p className="text-gray-700 mb-4">
          Ready to take advantage of our top-notch services? Start shopping today and enjoy the best e-commerce experience at QuickCart.
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default Services;
