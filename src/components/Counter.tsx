import { useState } from "react";

const Counter = ({ todos }) => {
  const [count, setCount] = useState(0);
  return (
    <p 
    onClick={() => {
      setCount(count + 1);
    }}>
      <b>{todos.filter((todo) => todo.isCompleted).length} </b>/ {todos.length} todo's completed
    </p>
  );
};

export default Counter;
