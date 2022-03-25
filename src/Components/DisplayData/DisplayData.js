import React from "react";
import "../FakeData/Products";

const DisplayData = (props) => {
  console.log(props.product);
  return (
    <div>
      <h3>name:{} </h3>
    </div>
  );
};

export default DisplayData;
