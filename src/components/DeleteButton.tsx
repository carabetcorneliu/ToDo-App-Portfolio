const DeleteButton = ({ id, onDeleteTodo }: { id: number, onDeleteTodo: (id: number) => void }) => {
  return (
    <button
      className="text-red-600 font-bold text-[16px]"
      onClick={(e) => {
        e.stopPropagation();
        onDeleteTodo(id);
      }}
    >
      x
    </button>
  );
};

export default DeleteButton;
