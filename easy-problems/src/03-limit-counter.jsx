import React, { useState } from "react";

function LimitCounter() {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    setCounter(counter - 1);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={decrement} disabled={counter === 0}>
        Subtract
      </button>
      {counter}
      <button onClick={increment} disabled={counter === 10}>
        Add
      </button>
    </div>
  );
}

export default LimitCounter;
