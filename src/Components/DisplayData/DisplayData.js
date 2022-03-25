import React from "react";
import "./DisplayData.css";

const DisplayData = (props) => {
  const { name, id, price, Img_url } = props.product;
  console.log(props);
  return (
    <div className="">
      <div>
        <img src={Img_url} alt="" />
        <h2>{name}</h2>
        <h5>Price: $ {price}</h5>
        <button className="cart-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default DisplayData;
