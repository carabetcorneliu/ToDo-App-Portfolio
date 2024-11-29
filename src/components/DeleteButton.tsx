const DeleteButton = ({ id, setTodos }) => {
    return (
        <button className="text-red-600 font-bold text-[16px]"
        onClick={(e) => {
            e.stopPropagation();
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
        }}
        >x</button>
    )
}

export default DeleteButton;