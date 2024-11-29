import DeleteButton from "./DeleteButton";

const initialTodoList = [
  {
    text: "buy groceries",
    isCompleted: false,
  },
  {
    text: "do laundry",
    isCompleted: true,
  },
  {
    text: "study for tommorrow's exam",
    isCompleted: false,
  },
  {
    text: "go out for a walk",
    isCompleted: true,
  },
  {
    text: "read a few pages in the book",
    isCompleted: false,
  },
  {
    text: "take a nap",
    isCompleted: true,
  },
  {
    text: "clean the house",
    isCompleted: false,
  },
  {
    text: "practice coding",
    isCompleted: true,
  },
];

const TodoList = () => {
  return (
    <ul>
      {initialTodoList.map((todo) => (
        <li
          key={todo.text}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[0.08]"
        >
          <span className={`${todo.isCompleted && "line-through text-[#ccc]"}`}>
            {todo.text}
          </span>
          <DeleteButton />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
