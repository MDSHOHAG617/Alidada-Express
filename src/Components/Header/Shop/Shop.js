import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useState } from "react";
import Product from "../../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [list, setList] = useState([]);

  const handleChooseAgain = () => {
    setCart([]);
  };

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
        <button className="cart-btn">Choose one for me</button>
        <button className="cart-btn" onClick={handleChooseAgain}>
          Choose Again
        </button>
      </div>
      <div className="QnA">
        <div className="question">
          <h3>How React works?</h3>
          <p>
            React is a library function of javascript. In react we can write
            code as like html but it's not really html, it is a JSX which is
            called javascript XML.In react we declare useState to set the state,
            And we use useEffect to fetch the data in it
          </p>
        </div>
        <div className="question">
          <h3>Define Props vs State</h3>
          <p>
            {" "}
            React is a library function of javascript. In react we can write
            code as like html but it's not really html, it is a JSX which is
            called javascript XML.In react we declare useState to set the state,
            And we use useEffect to fetch the data in it{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
