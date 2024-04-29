/* eslint-disable prettier/prettier */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import * as types from './actionTypes';
import checkboxReducer from './checkboxSlice';

export interface Todo {
  id: number;
  content: string;
}

export interface RootState {
  todos: Todo[];
  checkboxStatus: {
    total: number;
    checked: number;
  };
}

const initialState: RootState = {
  todos: [],
  checkboxStatus: {
    total: 0,
    checked: 0,
  },
};

const todosReducer = (
  state: RootState['todos'] = initialState.todos,
  action: any,
) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        { id: state.length + 1, content: action.payload.content },
      ];
    case types.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case types.EDIT_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, content: action.payload.content }
          : todo,
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers<RootState>({
  todos: todosReducer,
  checkboxStatus: checkboxReducer, // 확실히 정의된 부분
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
