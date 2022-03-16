import React from "react";

const Todos = function (props) {
  console.log(props);

  let uppercase = [];

  let processProps = (p) => {
    uppercase = p.todoProps.map((i) => {
      return { status: i.status, text: i.text.toUpperCase() };
    });
  };

  processProps(props);

  return (
    <div id="todos">
      Todos will go here.
      {uppercase.map(({ text, status }) => (
        <div className={status}>{text}</div>
      ))}
    </div>
  );
};

export default Todos;
