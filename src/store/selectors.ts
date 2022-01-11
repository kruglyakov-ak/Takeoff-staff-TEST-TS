import { AuthorizationStatus } from '../const';
import { Contact } from '../types/contact';
import { State } from '../types/state';

const getContacts = (state: State): Contact[] => state.contacts;
const getAuthorizationStatus = (state: State): AuthorizationStatus => state.authorizationStatus;
const getCurrentLogin = (state: State): string | undefined=> state.currentLogin;

export {
  getContacts,
  getAuthorizationStatus,
  getCurrentLogin
};
