import { APIRoute, AuthorizationStatus, VALIDATION_FAIL_MESSAGE } from '../const';
import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { Contact } from '../types/contact';
import { ContactPost } from '../types/contact-post';
import { changeContacts, loadContacts, requireAuthorization } from './action';
import { toast } from 'react-toastify';

const fetchContactsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<Contact[]>(APIRoute.Contacts);
    dispatch(loadContacts(data));
  };

const updateContactAction = (
  id: number,
  request: ContactPost,
): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.patch<Contact>(`${APIRoute.Contacts}/${id}`, request);
    dispatch(changeContacts(data));
  };

const deleteContactAction = (
  id: number,
): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.delete<Contact>(`/contacts/${id}`);
    const { data } = await api.get<Contact[]>(APIRoute.Contacts);
    dispatch(loadContacts(data));
  };

const addNewContactAction = (
  request: ContactPost,
): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.post<Contact>('/contacts', request);
    const { data } = await api.get<Contact[]>(APIRoute.Contacts);
    dispatch(loadContacts(data));
  };

const loginAction = ({ email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.post(APIRoute.Login, { email, password });
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      toast.info(VALIDATION_FAIL_MESSAGE);
    }
  };

export {
  fetchContactsAction,
  updateContactAction,
  deleteContactAction,
  addNewContactAction,
  loginAction
};

