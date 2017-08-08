import { ADD_TODO } from '../actions/todos';
import merge from 'lodash/merge';
import { v4 } from 'uuid';

const todos_reducer =  (state=[], action) => {
  Object.freeze(state);
  switch(action.type){
    case ADD_TODO:
      const text = action.text;
      const newTodos = Object.assign([], state);
      newTodos.push({
        text,
        id: v4()
      });
      return newTodos;
    default:
      return state;
  }
};

export default todos_reducer;