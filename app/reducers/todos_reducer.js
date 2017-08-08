import { ADD_TODO, DELETE_TODO } from '../actions/todos';
import merge from 'lodash/merge';
import { v4 } from 'uuid';

const todos_reducer =  (state=[], action) => {
  Object.freeze(state);
  let newTodos;

  switch(action.type){
    case ADD_TODO:
      const text = action.text;
      newTodos = Object.assign([], state);
      newTodos.push({
        text,
        id: v4()
      });
      return newTodos;
    case DELETE_TODO:
      newTodos = Object.assign([], state);
      state.forEach((todo, i) => {
        if(todo.id === action.id)
          newTodos.splice(i, 1);
      });
      return newTodos;
    default:
      return state;
  }
};

export default todos_reducer;