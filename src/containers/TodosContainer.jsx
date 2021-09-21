import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "@components/Todos";

const TodosContainer = () => {
  const { todos } = useSelector((s) => s);
  const dispatch = useDispatch();

  return <Todos dispatch={dispatch} todos={todos} />;
};

export default TodosContainer;
