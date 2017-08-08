import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const def = Object.freeze({
  todos: []
});

const configureStore = (preloadedState=def) => (
  createStore(
    rootReducer,
    preloadedState
  )
);

export default configureStore;