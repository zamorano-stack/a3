import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      <h1 className="my-4">Loja de Roupas</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
