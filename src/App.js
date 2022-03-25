import "./App.css";
import Products from "./Components/FakeData/Products";
import Header from "./Components/Header/Header";
import DisplayData from "./Components/DisplayData/DisplayData";
import { useEffect, useState } from "react";

function App() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => data);
  // }, []);
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <DisplayData></DisplayData>
    </div>
  );
}

export default App;
