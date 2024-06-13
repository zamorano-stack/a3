import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card">
      <img src={product.image_url} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">R$ {product.price}</p>
        <button className="btn btn-primary" onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

export default ProductCard;
