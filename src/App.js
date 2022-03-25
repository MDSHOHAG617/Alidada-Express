import logo from "./logo.svg";
import "./App.css";
import Products from "./Components/FakeData/Products";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
    </div>
  );
}

export default App;
