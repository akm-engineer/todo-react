import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import AllTodos from "./components/AllTodos";
const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((e) => e.id === editId);
      const updatedTodo = todos.map((e) =>
        e.id === editTodo.id
          ? (e = { id: e.id, todo })
          : { id: e.id, todo: e.todo }
      );
      setTodos(updatedTodo);
      setEditId(0);
      setTodo("");
      return;
    }
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };
  const handleDelete = (id) => {
    const delTodo = todos.filter((e) => e.id !== id);
    setTodos([...delTodo]);
  };
  const handleEdit = (id) => {
    const editTodo = todos.find((e) => e.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>To-Do List</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        />
        <AllTodos
          todos={todos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default App;
