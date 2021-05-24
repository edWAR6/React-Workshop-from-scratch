import { CREATE_TODO, REMOVE_TODO } from './actions';

export const todos = (state = [], action) => {
  const { type, payload:{ text } } = action;

  switch (type) {
    case CREATE_TODO:
      const newTodo = {
        text,
        isCompleted: false
      };
      return state.concat(newTodo);

    case REMOVE_TODO:
      return state.filter(todo => todo.text !== text);
  
    default:
      return state;
  }
};
