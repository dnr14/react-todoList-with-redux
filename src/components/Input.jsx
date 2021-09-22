import React, { memo, useState } from "react";
import { addTodosAction } from "@redux/store";
import { useSelector } from "react-redux";

const Input = ({ dispatch }) => {
  const [state, setState] = useState("");
  const { todos } = useSelector((s) => s);

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
    dispatch(addTodosAction(state));
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
