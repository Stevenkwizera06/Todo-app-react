import { MdDelete, MdModeEdit } from "react-icons/md";

const TodoItem = ({ index, todo, handleTodoComplete, handleTodoDelete, handleTodoEdit }) => {
  
  return (
    <div className="pt-8 border-b-2">
      <input
        className="mr-2"
        type="checkbox"
        checked={todo.completed}
        onChange={()=>handleTodoComplete(index)}
      />
      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.text}
      </span>
      <button className=" float-right" onClick={()=>handleTodoDelete(index)}>
        <MdDelete className="text-red-500 bg-[#f2f3f5]  rounded-full p-[2px] h-6 w-6" />
      </button>
      <button className=" float-right" onClick={() =>handleTodoEdit(index)}>
        <MdModeEdit className="text-green-500 bg-[#f2f3f5]  rounded-full p-[2px] h-6 w-6" />
      </button>
    </div>
  );
};

export default TodoItem;
