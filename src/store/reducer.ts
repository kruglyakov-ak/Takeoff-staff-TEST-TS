import { createReducer } from '@reduxjs/toolkit';
import { State } from '../types/state';
import {
  changeContacts,
  loadContacts
} from './action';

const initialState: State = {
  contacts: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadContacts, (state, action) => {
      state.contacts = action.payload;
    })
    .addCase(changeContacts, (state, action) => {
      const changeContactIndex = state.contacts.findIndex((contact) => contact.id === action.payload.id);
      state.contacts[changeContactIndex] = action.payload;
    });
});

export { reducer };
