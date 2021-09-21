import React, { useState } from "react";
import { addTodosAction } from "@redux/store";

const Input = ({ dispatch }) => {
  const [state, setState] = useState("");

  const onChange = (e) => {
    setState(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
          placeholder="할 일을 적어주세요."
        />
      </form>
    </div>
  );
};

export default Input;
