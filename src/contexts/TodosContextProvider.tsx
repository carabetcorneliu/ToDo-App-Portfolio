import { createContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

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

const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  }
  return [];
};

const TodosContextProvider = ({ children }: TodosContextProviderProps) => {
  const { isAuthenticated } = useKindeAuth();
  // state
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  // derived state
  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  // event handlers
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3 && !isAuthenticated) {
      alert("Log in to add more than 3 todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
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
  // local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // fetch scheme
  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     // github todos data for fetch
  //     const mockupData = "https://raw.githubusercontent.com/carabetcorneliu/ToDo-App-Portfolio/refs/heads/main/src/test-data/todos.json"
  //     const response = await fetch(mockupData);
  //     const todos = await response.json();
  //     setTodos(todos);
  //   }
  //   fetchTodos();
  // }, []);

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
