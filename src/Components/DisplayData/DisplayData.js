import React from "react";

const DisplayData = (props) => {
  const { name, id, price, Img_url } = props.product;
  console.log(props);
  return <div>name:{name}</div>;
};

export default DisplayData;
