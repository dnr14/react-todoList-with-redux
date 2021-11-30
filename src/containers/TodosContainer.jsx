import React, { useCallback, useMemo, useState } from "react";
import { todoSelector, actions } from "../redux-toolkit/todoList";
import { useDispatch, useSelector } from "react-redux";
import Todos from "@components/Todos";
import MenuBar from "../components/MenuBar";

const TodosContainer = () => {
  const todos = useSelector(todoSelector);
  const [menu, setMenu] = useState("all");

  const handleClick = useCallback((e) => {
    const name = e.target.getAttribute("name");
    if (name) {
      setMenu(e.target.getAttribute("name"));
    }
  }, []);

  const newTodos = todos.filter((todo) =>
    menu === "all"
      ? todo
      : menu === "completion"
      ? todo.done === true
      : todo.done === false
  );

  const menuBar = useMemo(
    () => <MenuBar menu={menu} handleClick={handleClick} />,
    [menu, handleClick]
  );

  return <Todos handleClick={handleClick} todos={newTodos} menuBar={menuBar} />;
};

export default TodosContainer;
