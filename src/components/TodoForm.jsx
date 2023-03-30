import {  MdAddCircle } from "react-icons/md";


const TodoForm = ({ newTodo, handleNewTodoChange, handleNewTodoAdd }) => {
       return (
         <form className="flex rounded-full justify-between shadow-box" onSubmit={handleNewTodoAdd}>
           <input
             className="bg-white w-full px-4 py-5 rounded-full outline-none placeholder:text-base placeholder:text-black "
             type="text"
             value={newTodo}
             onChange={handleNewTodoChange}
             placeholder="Add todo..."
           />
           <button className="pr-5" type="submit">
             <MdAddCircle className="text-[#61C7C6] w-7 h-10" />
           </button>
         </form>
       );
     };
     
     export default TodoForm;
     