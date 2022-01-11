import { Action } from 'redux';
import { AxiosInstance } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { State } from './state';

enum ActionType {
  LoadContacts = 'data/loadContacts',
  ChangeContacts = 'data/changeContacts',
  DeleteContacts = 'data/deleteContacts',
  RequireAuthorization = 'user/requireAuthorization',
  SetCurrentLogin = 'user/setCurrentLogin',
}

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export {
  ActionType
};

export type {
  ThunkActionResult
};
