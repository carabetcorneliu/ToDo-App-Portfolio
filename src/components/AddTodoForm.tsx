import { useContext, useState } from "react";
import Button from "./Button";
import { TodosContext } from "../contexts/TodosContextProvider";

const AddTodoForm = () => {
  const [todoText, setTodoText] = useState("");
  const { handleAddTodo } = useContext(TodosContext);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (todoText.length === 0) return;
        handleAddTodo(todoText);
        setTodoText("");
      }}
    >
      <h2 className="font-medium text-[#231d15">Add todo</h2>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] 
            block w-full px-[16px] bg-[#fffdfa] bg-opacity-100"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />

      <Button>Add to List</Button>
    </form>
  );
};

export default AddTodoForm;
