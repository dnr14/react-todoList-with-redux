import React, { memo } from "react";
import Item from "@components/Item";

const List = ({ todos }) => {
  if (todos == 0) return null;
  return (
    <ul className="list">
      {todos.map((todo, idx) => (
        <Item key={todo.id} idx={idx + 1} todo={todo} />
      ))}
    </ul>
  );
};

export default memo(List);
