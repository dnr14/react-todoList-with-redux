import { createSlice } from "@reduxjs/toolkit";

let nextId = 0;
const slice = createSlice({
  name: "todoList",
  initialState: [],
  // action 및 reducer
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nextId++,
        text: action.payload,
        done: false,
      });
    },
    deleteTodo: (state, action) => {
      const idx = state.findIndex((todo) => todo.id === action.payload);
      state.splice(idx, 1);
    },
    toggleTodo: (state, action) => {
      const idx = state.findIndex((todo) => todo.id === action.payload);
      state[idx].done = !state[idx].done;
    },
  },
});

export const todoSelector = ({ todoReducer }) => todoReducer;
export const actions = slice.actions;
export default slice.reducer;
