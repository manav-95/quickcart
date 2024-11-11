// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const categoryAPIs = {
  fashion: 'https://fakestoreapi.com/products/category/fashion',
  electronics: 'https://fakestoreapi.com/products/category/electronics',
  beauty: 'https://fakestoreapi.com/products/category/beauty',
  sports: 'https://fakestoreapi.com/products/category/sports',
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Retrieve the search query from the URL
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setSearchQuery(queryParams.get('search') || ''); // Get 'search' query param
  }, [location]);

  useEffect(() => {
    // Fetch products based on selected category
    const fetchProducts = async () => {
      const apiUrl = category ? categoryAPIs[category] : 'https://fakestoreapi.com/products';
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, [category]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Update the URL with the search query
    const url = new URL(window.location);
    url.searchParams.set('search', query);
    window.history.pushState({}, '', url);

    // Show suggestions based on the search query
    if (query.length > 0) {
      const filteredSuggestions = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSearchQuery('');
    setSuggestions([]);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center space-x-4 mb-6">
        <select
          value={category}
          onChange={handleCategoryChange}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">All Categories</option>
          <option value="fashion">Fashion</option>
          <option value="electronics">Electronics</option>
          <option value="beauty">Beauty</option>
          <option value="sports">Sports</option>
        </select>

        <div className="relative">
          <input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearch}
            className="border border-gray-300 rounded-md p-2 w-64"
          />
          {/* Suggestions List */}
          {suggestions.length > 0 && (
            <div className="absolute bg-white border border-gray-300 rounded-md mt-1 w-64 z-10 max-h-48 overflow-y-auto">
              {suggestions.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="block p-2 hover:bg-gray-100">
                  {product.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="border border-gray-300 rounded-md p-4 shadow hover:shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
