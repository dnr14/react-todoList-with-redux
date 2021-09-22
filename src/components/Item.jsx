import React, { memo } from "react";
import deletSvg from "@images/delete.svg";
import { Checkbox } from "antd";
import "antd/dist/antd.css";

const Item = ({ todo, deleteTodos, toggle, idx }) => {
  return (
    <li className="list--item">
      <Checkbox className="item-content" onChange={toggle(todo.id)} checked={todo.done}>
        <span className="item-content_value">{idx}.</span>
        <span className="item-content_value">{todo.text}</span>
      </Checkbox>
      <div className="item-icon" onClick={deleteTodos(todo.id)}>
        <img src={deletSvg} />
      </div>
    </li>
  );
};

export default memo(Item);
