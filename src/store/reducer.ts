import { createReducer } from '@reduxjs/toolkit';
import { State } from '../types/state';
import {
  loadContacts
} from './action';

const initialState: State = {
  contacts: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadContacts, (state, action) => {
      state.contacts = action.payload;
    });
});

export { reducer };
