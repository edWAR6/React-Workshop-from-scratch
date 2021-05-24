import { createStore, combineReducers } from 'redux';
import { todos } from '../components/todos/reducers';

const reducers = {
  todos,
};

const rootReducers = combineReducers(reducers);

export const configureStore = () => createStore(rootReducers);
