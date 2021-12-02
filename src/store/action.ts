import { createAction } from '@reduxjs/toolkit';
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

export {
  loadContacts,
  changeContacts
};
