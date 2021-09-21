import React from "react";
import Item from "@components/Item";

const List = ({ todos }) => {
  return (
    <ul className="list">
      {todos &&
        todos.map((todo) => {
          return <Item key={todo.id} todo={todo} />;
        })}
    </ul>
  );
};

export default List;
