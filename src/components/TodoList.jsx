import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleTodoComplete, handleTodoDelete, handleTodoEdit }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          handleTodoComplete={handleTodoComplete}
          handleTodoDelete={handleTodoDelete}
          handleTodoEdit={handleTodoEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
