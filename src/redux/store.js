import { createStore } from 'redux';

// actions
export const ADD_TODOS = "ADD_TODOS";
export const DELETE_TODOS = "DELETE_TODOS";
export const TOGGLE_CHANGE = "TOGGLE_CHANGE";

// actions Create
export const addTodosAction = (text) => ({ type: ADD_TODOS, text });
export const deleteTodosAction = id => ({ type: DELETE_TODOS, id });
export const toggleChangeAction = id => ({ type: TOGGLE_CHANGE, id })

const inialState = {
  todos: [],
}

let nextId = 1;
export const reducer = (prevState = inialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...prevState,
        todos: [...prevState.todos, {
          id: nextId++,
          text: action.text,
          done: false
        }]
      }
    case DELETE_TODOS:
      return {
        ...prevState,
        todos: prevState.todos.filter(todo => todo.id !== action.id)
      }
    case TOGGLE_CHANGE:
      return {
        ...prevState,
        todos: prevState.todos.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo)
      }
    default:
      return prevState;
  }
}

const store = createStore(reducer);
export default store;