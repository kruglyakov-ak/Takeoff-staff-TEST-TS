import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { ActionType } from '../types/action';
import { Contact } from '../types/contact';

const loadContacts = createAction(
  ActionType.LoadContacts,
  (contacts: Contact[]) => ({
    payload: contacts,
  }),
);

const changeContacts = createAction(
  ActionType.ChangeContacts,
  (contact: Contact) => ({
    payload: contact,
  }),
);

const deleteContact = createAction(
  ActionType.ChangeContacts,
  (id: number) => ({
    payload: id,
  }),
);

const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

const setCurrentLogin = createAction(
  ActionType.SetCurrentLogin,
  (login: string | undefined) => ({
    payload: login,
  }),
);

export {
  loadContacts,
  changeContacts,
  deleteContact,
  requireAuthorization,
  setCurrentLogin
};
