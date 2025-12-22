import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Product from "./Product";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <>
      <div>
        <Header cartCount={cartCount} />
        <Product addToCart={addToCart} />
      </div>
    </>
  );
}

export default App;
