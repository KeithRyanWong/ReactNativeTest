import { createStore, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from '../reducers/root_reducer';

const defaultState = Object.freeze({
  todos: []
});

const configureStore = (preloadedState=defaultState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(autoRehydrate())
  );

  persistStore(store, {storage: AsyncStorage});
  return store;
};

export default configureStore;