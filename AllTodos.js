import React from "react";

const AllTodos = ({ todos, handleEdit, handleDelete }) => {
  return (
    <ul className="allTodos">
      {todos.map((e) => (
        <li className="singleTodos">
          <span className="todoText" key={e.id}>
            {e.todo}
          </span>
          <button className="editButton" onClick={() => handleEdit(e.id)}>
            Edit
          </button>
          <button className="delButton" onClick={() => handleDelete(e.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AllTodos;
