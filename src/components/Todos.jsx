import React from "react";
import List from "@components/List";
import Title from "@components/Title";
import Input from "@components/Input";
import "@style/todos.scss";

const Todos = ({ todos, dispatch }) => {
  return (
    <div className="container">
      <Title />
      <div className="main">
        <Input dispatch={dispatch} />
        <List todos={todos} />
      </div>
    </div>
  );
};

export default Todos;
