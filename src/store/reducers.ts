// reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import * as types from './actionTypes';

// Todo 및 State 인터페이스를 내보냅니다.
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

const rootReducer = (state: State = initialState, action: any) => {
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

// InjectedReducersType를 사용하지 않는 경우를 고려하여 필요에 따라서 identity function을 반환하도록 수정
export const createReducer = (injectedReducers: any = {}) => {
  if (Object.keys(injectedReducers).length === 0) {
    return (state: State) => state;
  } else {
    return combineReducers({
      ...injectedReducers,
      rootReducer,
    });
  }
};

export default rootReducer; // rootReducer를 내보냅니다.
