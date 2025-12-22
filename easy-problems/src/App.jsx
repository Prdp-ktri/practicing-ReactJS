import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState("Login");

  const loginButton = (e) => {
    e.preventDefault();
    if (login === "Login") {
      setLogin("Logout");
    } else {
      setLogin("Login");
    }
  };

  return (
    <>
      <button onClick={loginButton}>{login}</button>
    </>
  );
}

export default App;
