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

const deleteContactAction = (
  id: number,
): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.delete<Contact>(`/contacts/${id}`);
    const { data } = await api.get<Contact[]>('/contacts');
    dispatch(loadContacts(data));
  };

const addNewContactAction = (
  request: ContactPost,
): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.post<Contact>('/contacts', request);
    const { data } = await api.get<Contact[]>('/contacts');
    dispatch(loadContacts(data));
  };

export {
  fetchContactsAction,
  updateContactAction,
  deleteContactAction,
  addNewContactAction
};

