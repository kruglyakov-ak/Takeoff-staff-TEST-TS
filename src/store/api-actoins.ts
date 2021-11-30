import { ThunkActionResult } from '../types/action';
import { Contact } from '../types/contact';
import { loadContacts } from './action';

const fetchContactsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Contact[]>('/contacts');
    dispatch(loadContacts(data));
  };

export {
  fetchContactsAction
};

