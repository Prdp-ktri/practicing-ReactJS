import React, { useState } from "react";

function Login() {
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
    <div>
      <button onClick={loginButton}>{login}</button>
    </div>
  );
}

export default Login;
