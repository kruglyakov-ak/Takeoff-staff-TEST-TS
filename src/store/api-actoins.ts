import { ThunkActionResult } from '../types/action';
import { Contact } from '../types/contact';
import { ContactPost } from '../types/contact-post';
import { changeContacts, loadContacts } from './action';

const fetchContactsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Contact[]>('/contacts');
    dispatch(loadContacts(data));
  };

const updateContactAction = (
  id: number,
  request: ContactPost,
): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.patch<Contact>(`/contacts/${id}`, request);
    dispatch(changeContacts(data));
  };

export {
  fetchContactsAction,
  updateContactAction
};

