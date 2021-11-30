import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoList";

export default configureStore({
  reducer: {
    todoReducer,
  },
});
