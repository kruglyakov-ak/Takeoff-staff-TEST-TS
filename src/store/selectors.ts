import { Contact } from '../types/contact';
import { State } from '../types/state';

const getContacts = (state: State): Contact[] => state.contacts;

export {
  getContacts
};
