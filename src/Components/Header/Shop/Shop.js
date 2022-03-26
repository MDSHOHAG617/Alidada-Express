import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useState } from "react";
import Product from "../../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [list, setList] = useState([]);
  const [choose, setchoose] = useState([]);
  const [flag, setFlag] = useState(false);
  const handleChooseAgain = () => {
    setCart([]);
  };
  const handleChooseOne = () => {
    let uniqueProduct = [];
    let chooseOne = Math.round(Math.random() * list.id);
    if (chooseOne >= 0 && chooseOne <= 11) {
      const choosingValue = cart.filter((data) => data.id == chooseOne);
      let uniqueProduct = [...new Set(choosingValue)];
      setchoose(uniqueProduct);
      console.log(chooseOne);
    }
    setFlag(true);
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
    setFlag(false);
  };
  console.log(choose);
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
        {!flag && cart.map((list) => <p key={list.id}>{list.name}</p>)}
        {flag && choose.map((list) => <p key={list.id}>{list.name}</p>)}
        <button className="cart-btn" onClick={handleChooseOne}>
          Choose one for me
        </button>
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
            And we use useEffect to fetch the data in it. In react we can access
            data and function by using props. In react we access data like water
            fall model, Form top we can use data to bottom but to bottom to top
            we can't access data generally.
          </p>
        </div>
        <div className="question">
          <h3>Define Props vs State</h3>
          <p>
            There are so many difference between Props and State like , Props
            Which is read only but on the other hand state changes can be
            asynchronous. Props are immutable but state is mutable. Props can be
            accessed by the child component but state can't.By using props we
            can component reuseable but state is not reuseable. Props works
            between components but state used for rendering dynamic changes with
            the component
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
