/* eslint-disable prettier/prettier */
import { combineReducers } from '@reduxjs/toolkit';
import * as types from './actionTypes';

export interface Todo {
  id: number;
  content: string;
}

export interface State {
  todos: Todo[];
}

const initialState: State = {
  todos: [],
};

const todosReducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.todos.length + 1, content: action.payload.content },
        ],
      };
    case types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
    case types.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, content: action.payload.content }
            : todo,
        ),
      };
    default:
      return state;
  }
};

export default combineReducers({
  todos: todosReducer,
});
