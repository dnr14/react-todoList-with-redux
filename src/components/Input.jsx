import React, { memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions, todoSelector } from "../redux-toolkit/todoList";

const Input = () => {
  const [state, setState] = useState("");
  const todos = useSelector(todoSelector);
  const { addTodo } = actions;
  const dispatch = useDispatch();

  const onChange = (e) => {
    setState(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (state === "") {
      setState("");
      return;
    }
    if (todos.length === 10) {
      setState("");
      return;
    }
    setState("");
    dispatch(addTodo(state));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          value={state}
          onChange={onChange}
          maxLength="20"
          placeholder={
            todos.length === 10 ? "할 일이 꽉 찼습니다." : "할 일을 적어주세요."
          }
        />
      </form>
    </div>
  );
};

export default memo(Input);
