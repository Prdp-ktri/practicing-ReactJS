import { lazy, Suspense, useState } from "react";
import "./App.css";
import Header from "./Header";
import Product from "./Product";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const LazyComponent = lazy(() => import("./LazyComponent.jsx"));

  return (
    <>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Header cartCount={cartCount} />
          <Product addToCart={addToCart} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
