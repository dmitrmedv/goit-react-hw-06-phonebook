import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const reduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
