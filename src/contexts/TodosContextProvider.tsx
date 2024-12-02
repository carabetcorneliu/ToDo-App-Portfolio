import { createContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";

type TodosContextProviderProps = {
  children: React.ReactNode;
};

type TTodosContext = {
  todos: Todo[];
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleDeleteTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);

// mock data
// const initialTodoList = [
//   {
//     id: 1,
//     text: "buy groceries",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     text: "do laundry",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "study for tommorrow's exam",
//     isCompleted: false,
//   },
//   {
//     id: 4,
//     text: "go out for a walk",
//     isCompleted: true,
//   },
//   {
//     id: 5,
//     text: "read a few pages in the book",
//     isCompleted: false,
//   },
//   {
//     id: 6,
//     text: "take a nap",
//     isCompleted: true,
//   },
//   {
//     id: 7,
//     text: "clean the house",
//     isCompleted: false,
//   },
//   {
//     id: 8,
//     text: "practice coding",
//     isCompleted: true,
//   },
// ];

const TodosContextProvider = ({ children }: TodosContextProviderProps) => {
  // state
  const [todos, setTodos] = useState<Todo[]>([]);

  // derived state
  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  // event handlers
  const handleAddTodo = (todoText: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: todoText,
        isCompleted: false,
      },
    ]);
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            isCompleted: !t.isCompleted,
          };
        }
        return t;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // side effects
  useEffect(() => {
    const fetchTodos = async () => {
      // github todos data for fetch
      const mockupData = "https://raw.githubusercontent.com/carabetcorneliu/ToDo-App-Portfolio/refs/heads/main/src/test-data/todos.json"
      const response = await fetch(mockupData);
      const todos = await response.json();
      setTodos(todos);
    }
    fetchTodos();
  }, []);

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumberOfTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;