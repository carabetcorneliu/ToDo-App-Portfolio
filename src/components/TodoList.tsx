import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";
import DeleteButton from "./DeleteButton";

const TodoList = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("Forgot to add provider");
  }

  const { todos, handleToggleTodo, handleDeleteTodo } = context;
  
  return (
    <ul>
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold">
          Start by adding a todo
        </li>
      )}
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[0.08]"
          onClick={() => {
            handleToggleTodo(todo.id);
          }}
        >
          <span className={`${todo.isCompleted && "line-through text-[#ccc]"}`}>
            {todo.text}
          </span>

          <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
