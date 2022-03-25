import React from "react";
import DisplayData from "../DisplayData/DisplayData";

const Products = () => {
  const products = [
    { id: 1, name: "Smart Watch", price: 200, Img_url: "https://" },
    { id: 2, name: "Smart Watch", price: 200, Img_url: "https://" },
    { id: 3, name: "Smart Watch", price: 200, Img_url: "https://" },
    { id: 4, name: "Smart Watch", price: 200, Img_url: "https://" },
    { id: 5, name: "Smart Watch", price: 200, Img_url: "https://" },
    { id: 6, name: "Smart Watch", price: 200, Img_url: "https://" },
    { id: 7, name: "Smart Watch", price: 200, Img_url: "https://" },
    { id: 8, name: "Smart Watch", price: 200, Img_url: "https://" },
    { id: 9, name: "Smart Watch", price: 200, Img_url: "https://" },
    { id: 10, name: "Smart Watch", price: 200, Img_url: "https://" },
    { id: 11, name: "Smart Watch", price: 200, Img_url: "https://" },
    { id: 12, name: "Smart Watch", price: 200, Img_url: "https://" },
  ];
  return (
    <div>
      {products.map((product) => (
        <DisplayData key={product.id} product={product}></DisplayData>
      ))}
    </div>
  );
};

export default Products;
