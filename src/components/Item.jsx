import React, { memo } from "react";
import deletSvg from "@images/delete.svg";

const Item = ({ todo }) => {
  return (
    <li className="list--item">
      <div className="item-content">
        <span>{todo.id}.</span>
        <span>{todo.text}</span>
      </div>
      <div className="item-icon">
        <img src={deletSvg} />
      </div>
    </li>
  );
};

export default memo(Item);
