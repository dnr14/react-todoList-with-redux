import React from "react";
import TodosContainer from "@containers/TodosContainer";
import { hot } from "react-hot-loader";

const App = () => {
  return <TodosContainer />;
};

const Hot = hot(App);
export default Hot;
