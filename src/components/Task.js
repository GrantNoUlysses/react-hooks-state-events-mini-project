import React from "react";

function Task({ task }) {
  const { text, category } = task;

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
    </div>
  );
}

export default Task;
