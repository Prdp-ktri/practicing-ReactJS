import React, { useState } from "react";

function SimpleTodo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodo([...todo, input]);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        name=""
        onChange={(e) => setInput(e.target.value)}
        id=""
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add</button>

      <div>
        {todo.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
      </div>
    </div>
  );
}

export default SimpleTodo;
