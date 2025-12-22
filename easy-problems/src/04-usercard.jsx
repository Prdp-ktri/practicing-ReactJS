import React, { useState } from "react";

function Usercard() {
  const [online, setOnline] = useState("Online");
  const [color, setColor] = useState("green");

  const liveBtn = (e) => {
    e.preventDefault();
    if (color === "green") {
      setColor("red");
      setOnline("Offline");
    } else {
      setColor("green");
      setOnline("Online");
    }
  };

  return (
    <div>
      <div
        style={{
          border: "5px solid black",
          borderRadius: "25px",
          padding: "50px",
        }}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" name="" id="" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="" id="" />
        <br />
        <div
          style={{
            width: "25px",
            height: "25px",
            backgroundColor: color,
            margin: "25px",
            borderRadius: "50%",
          }}
        ></div>
        <button onClick={liveBtn}>{online}</button>
      </div>
    </div>
  );
}

export default Usercard;
