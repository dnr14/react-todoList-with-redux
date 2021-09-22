import React, { memo } from "react";
import Item from "@components/Item";

const List = ({ todos, deleteTodos, toggle }) => {
  if (todos == 0) return null;
  return (
    <ul className="list">
      {todos.map((todo, idx) => (
        <Item
          key={todo.id}
          idx={idx + 1}
          todo={todo}
          deleteTodos={deleteTodos}
          toggle={toggle}
        />
      ))}
    </ul>
  );
};

export default memo(List);
