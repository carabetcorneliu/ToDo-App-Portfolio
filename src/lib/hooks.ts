import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";

const useTodosContext = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("Forgot to add provider");
  }
  return context;
};

export default useTodosContext;
