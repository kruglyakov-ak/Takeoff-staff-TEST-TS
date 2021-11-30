import LoginPage from '../login-page/login-page';
import { Routes, Route } from 'react-router-dom';
import ContactsPage from '../contacts-page/contacts-page';

function App(): JSX.Element {
  return (
    <Routes >
      <Route path={'/'} element={<ContactsPage />} />
      <Route path={'/login'} element={<LoginPage />} />
    </Routes >
  );
}

export default App;
