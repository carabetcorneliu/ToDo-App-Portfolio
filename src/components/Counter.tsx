import useTodosContext from "../lib/hooks";

const Counter = () => {
  const { totalNumberOfTodos, numberOfCompletedTodos } = useTodosContext();
  return (
    <p>
      <b>{numberOfCompletedTodos} </b>/ {totalNumberOfTodos} todo's completed
    </p>
  );
};

export default Counter;
