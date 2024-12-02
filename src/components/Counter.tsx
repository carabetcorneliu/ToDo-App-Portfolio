const Counter = ({ todos }) => {
  return (
    <p>
      <b>{todos.filter((todo) => todo.isCompleted).length} </b>/ {todos.length} todo's completed
    </p>
  );
};

export default Counter;
