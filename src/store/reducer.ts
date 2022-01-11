import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { State } from '../types/state';
import {
  changeContacts,
  loadContacts,
  requireAuthorization,
  setCurrentLogin
} from './action';

const initialState: State = {
  contacts: [],
  authorizationStatus: AuthorizationStatus.NoAuth,
  currentLogin: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadContacts, (state, action) => {
      state.contacts = action.payload;
    })
    .addCase(changeContacts, (state, action) => {
      const changeContactIndex = state.contacts.findIndex((contact) => contact.id === action.payload.id);
      state.contacts[changeContactIndex] = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setCurrentLogin, (state, action) => {
      state.currentLogin = action.payload;
    });
});

export { reducer };
