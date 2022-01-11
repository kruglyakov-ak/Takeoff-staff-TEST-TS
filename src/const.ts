enum NameInputs {
  Name = 'name',
  Email = 'email',
  Tel = 'tel'
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

const enum APPRoute {
  Main = '/',
  Login = '/login'
}

const enum APIRoute {
  Contacts = '/contacts',
  Login = '/login'
}

const VALIDATION_FAIL_MESSAGE = 'Неверные логин или пароль';

export {
  NameInputs,
  AuthorizationStatus,
  APPRoute,
  APIRoute,
  VALIDATION_FAIL_MESSAGE
};
