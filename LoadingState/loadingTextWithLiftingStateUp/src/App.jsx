import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        {loading ? <h2>Loading...</h2> : <h3>Data Loaded Successfully</h3>}
      </div>
    </>
  );
}

export default App;
