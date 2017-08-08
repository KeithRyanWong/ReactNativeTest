import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const defaultState = Object.freeze({
  todos: []
});

const configureStore = (preloadedState=defaultState) => (
  createStore(
    rootReducer,
    preloadedState
  )
);

export default configureStore;