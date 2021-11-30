import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { Contact } from '../types/contact';

const loadContacts = createAction(
  ActionType.LoadContacts,
  (contacts: Contact[]) => ({
    payload: contacts,
  }),
);

export {
  loadContacts
};
