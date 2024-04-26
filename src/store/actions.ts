/* eslint-disable prettier/prettier */
import * as types from './actionTypes';

export const addTodo = (content: string) => ({
  type: types.ADD_TODO,
  payload: { content },
});

export const deleteTodo = (id: number) => ({
  type: types.DELETE_TODO,
  payload: { id },
});

export const editTodo = (id: number, content: string) => ({
  type: types.EDIT_TODO,
  payload: { id, content },
});
