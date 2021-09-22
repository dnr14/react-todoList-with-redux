import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodosAction, toggleChangeAction } from "../redux/store";
import Todos from "@components/Todos";
import MenuBar from "../components/MenuBar";

const TodosContainer = () => {
  const { todos } = useSelector((s) => s);
  const [menu, setMenu] = useState("all");
  const dispatch = useDispatch();

  const deleteTodos = useCallback(
    (id) => () => dispatch(deleteTodosAction(id)),
    [dispatch]
  );
  const toggle = useCallback((id) => () => dispatch(toggleChangeAction(id)), [dispatch]);

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

  return (
    <Todos
      dispatch={dispatch}
      toggle={toggle}
      deleteTodos={deleteTodos}
      handleClick={handleClick}
      todos={newTodos}
      menuBar={menuBar}
    />
  );
};

export default TodosContainer;
