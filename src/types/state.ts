import { AuthorizationStatus } from '../const';
import { Contact } from './contact';

type State = {
  contacts: Contact[],
  authorizationStatus: AuthorizationStatus,
  currentLogin: string | undefined,
}

export type {
  State
};
