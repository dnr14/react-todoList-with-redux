import React from "react";
import List from "@components/List";
import Title from "@components/Title";
import Input from "@components/Input";
import "@style/todos.scss";

const Todos = ({ todos, dispatch, deleteTodos, toggle, menuBar }) => {
  return (
    <div className="container">
      <Title />
      <div className="main">
        <Input dispatch={dispatch} />
        {menuBar}
        <List todos={todos} deleteTodos={deleteTodos} toggle={toggle} />
      </div>
    </div>
  );
};

export default Todos;
