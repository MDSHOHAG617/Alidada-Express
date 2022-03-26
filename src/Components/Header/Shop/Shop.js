import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useState } from "react";
import Product from "../../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setList(product);
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(cart);
  };
  // console.log(list);
  return (
    <div className="shope-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summery</h4>
        <p>Selected Items:{cart.length}</p>
        {cart.map((list) => (
          <p key={list.id}>{list.name}</p>
        ))}
        <button>Choose one for me</button>
        <button>Choose Again</button>
      </div>
    </div>
  );
};

export default Shop;
