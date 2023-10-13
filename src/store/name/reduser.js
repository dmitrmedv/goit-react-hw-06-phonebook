import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const nameReduser = createReducer(initialState, {
  setName: (state, actions) => {
    return {
      ...state,
      name: actions.payload,
    };
  },
});
