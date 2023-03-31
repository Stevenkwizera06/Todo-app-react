import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  // const handleNewTodoChange = (event) => {
  //   setNewTodo(event.target.value);
  // };

  const handleNewTodoAdd = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== "") {
      if (editIndex !== -1) {
        const newTodos = [...todos];
        newTodos[editIndex].text = newTodo;
        setTodos(newTodos);
        setNewTodo("");
        setEditIndex(-1);
      } else {
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo("");
      }
    }
  };

  const handleTodoComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleTodoDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleTodoEdit = (index) => {
    setNewTodo(todos[index].text);
    setEditIndex(index);
  };

  return (
    <div className="container mx-auto max-w-xl pt-8">
      <h1 className="text-4xl font-bold mb-8">Todo App</h1>
      <TodoForm
        newTodo={newTodo}
        handleNewTodoChange={(event) => {setNewTodo(event.target.value)}}
        handleNewTodoAdd={handleNewTodoAdd}
      />
      <TodoList
        todos={todos}
        handleTodoComplete={handleTodoComplete}
        handleTodoDelete={handleTodoDelete}
        handleTodoEdit={handleTodoEdit}
      />
    </div>
  );
};

export default Todo;
