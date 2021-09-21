import { createStore } from 'redux';

// actions
export const ADD_TODOS = "ADD_TODOS";


// actions Create
export const addTodosAction = (text) => ({ type: ADD_TODOS, text });


// todos in  {
// id,
// text,
// done
// }

const inialState = {
  todos: [
  ],
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
    default:
      return prevState;
  }
}

const store = createStore(reducer);
export default store;