import React, { memo, useCallback } from "react";
import deletSvg from "@images/delete.svg";
import { Checkbox } from "antd";
import "antd/dist/antd.css";
import { actions } from "../redux-toolkit/todoList";
import { useDispatch } from "react-redux";

const Item = ({ todo, idx }) => {
  const { deleteTodo, toggleTodo } = actions;
  const dispatch = useDispatch();

  const deleteTodos = useCallback(
    (id) => () => dispatch(deleteTodo(id)),
    [dispatch]
  );
  const toggle = useCallback(
    (id) => () => dispatch(toggleTodo(id)),
    [dispatch]
  );

  return (
    <li className="list--item">
      <Checkbox
        className="item-content"
        onChange={toggle(todo.id)}
        checked={todo.done}
      >
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
