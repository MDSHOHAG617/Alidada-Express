import React, { useEffect, useState } from "react";
import DisplayData from "../DisplayData/DisplayData";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./Product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shope-container">
      <div className="products-container"></div>
      {products.map((product) => (
        <DisplayData key={product.id} product={product}></DisplayData>
      ))}
    </div>
  );
};

export default Products;
