// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Gets the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
        {/* Product Image */}
        <img src={product.image} alt={product.title} className="w-full md:w-1/3 object-cover" />

        {/* Product Details in Table Format */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl text-gray-700 mt-2">${product.price}</p>

          {/* Table to display product details */}
          <table className="min-w-full table-auto mt-6 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left border-b">Attribute</th>
                <th className="px-4 py-2 text-left border-b">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 font-semibold border-b">Price</td>
                <td className="px-4 py-2 border-b">${product.price}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold border-b">Category</td>
                <td className="px-4 py-2 border-b">{product.category}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold border-b">Description</td>
                <td className="px-4 py-2 border-b">{product.description}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold border-b">Rating</td>
                <td className="px-4 py-2 border-b">{product.rating.rate} ({product.rating.count} reviews)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold border-b">Product ID</td>
                <td className="px-4 py-2 border-b">{product.id}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
