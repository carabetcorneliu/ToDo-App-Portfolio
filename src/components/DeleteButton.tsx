const DeleteButton = ({ id, handleDeleteTodo }) => {
  return (
    <button
      className="text-red-600 font-bold text-[16px]"
      onClick={(e) => {
        e.stopPropagation();
        handleDeleteTodo(id);
      }}
    >
      x
    </button>
  );
};

export default DeleteButton;
