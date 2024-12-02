import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading.tsx";
import Header from "./Header.tsx";
import TodoList from "./TodoList.tsx";
import Sidebar from "./Sidebar.tsx";
import Footer from "./Footer.tsx";

const initialTodoList = [
  {
    id: 1,
    text: "buy groceries",
    isCompleted: false,
  },
  {
    id: 2,
    text: "do laundry",
    isCompleted: true,
  },
  {
    id: 3,
    text: "study for tommorrow's exam",
    isCompleted: false,
  },
  {
    id: 4,
    text: "go out for a walk",
    isCompleted: true,
  },
  {
    id: 5,
    text: "read a few pages in the book",
    isCompleted: false,
  },
  {
    id: 6,
    text: "take a nap",
    isCompleted: true,
  },
  {
    id: 7,
    text: "clean the house",
    isCompleted: false,
  },
  {
    id: 8,
    text: "practice coding",
    isCompleted: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodoList);
  return (
    // Main page container + styling (left here for convenience reasons)
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen flex-col">
      <BackgroundHeading />

      <main
        className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)]
      grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden bg-opacity-65"
      >
        <Header todos={todos} />

        <TodoList todos={todos} setTodos={setTodos} />

        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}

export default App;
