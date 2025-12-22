import React, { useState } from "react";

function Password() {
  const [pwd, setPwd] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const hideShowToggle = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <form>
        <input
          type={showPassword ? "text" : "password"}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          placeholder="Enter password"
        />
        <button onClick={hideShowToggle}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </form>
    </div>
  );
}

export default Password;
