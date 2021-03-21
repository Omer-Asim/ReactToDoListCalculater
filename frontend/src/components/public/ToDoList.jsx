import React from "react";

const ToDoList = (props) => {
  return (
    <React.StrictMode>
      <ol id="toDoList">
        <ul>{props.aciklama}</ul>
      </ol>
    </React.StrictMode>
  );
};

export default ToDoList;
