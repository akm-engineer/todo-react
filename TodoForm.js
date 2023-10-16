import React from "react";

const TodoForm = ({ handleSubmit, todo, setTodo, editId }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        placeholder="Enter the task"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="goButton" type="submit">
        {editId ? "Edit" : "Go"}
      </button>
    </form>
  );
};

export default TodoForm;
