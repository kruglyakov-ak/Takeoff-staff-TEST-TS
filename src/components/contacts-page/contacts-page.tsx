import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AuthorizationStatus, APPRoute } from '../../const';
import { requireAuthorization, setCurrentLogin } from '../../store/action';
import { fetchContactsAction } from '../../store/api-actoins';
import { getAuthorizationStatus, getContacts, getCurrentLogin } from '../../store/selectors';
import ContactsList from '../contacts-list/contacts-list';

function ContactsPage(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const contacts = useSelector(getContacts);
  const currentLogin = useSelector(getCurrentLogin);
  const [isActiveAddMode, setIsActiveAddMode] = useState(false);

  const addButtonClickHandler = (isActive: boolean) => {
    setIsActiveAddMode(isActive);
  };

  const handleSingOutClick = () => {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setCurrentLogin(''));
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(APPRoute.Login, { replace: true });
    }
  }, [authorizationStatus, navigate]);

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  return (
    <div className="container">
      <div className='header-nav'>
        <div>
          {(currentLogin !== '' && currentLogin !== undefined) &&
            <span>{currentLogin}   </span>}
          <Link to="/login" onClick={handleSingOutClick}>
            <span className="header__signout">Sign out</span>
          </Link>
        </div>
        <button onClick={() => setIsActiveAddMode(true)}>+Add new contact</button>
      </div>
      <section className="contacts">
        <h1 className="contacts__title">Contacts</h1>
        <ContactsList contacts={contacts} isActiveAddMode={isActiveAddMode} addButtonClickHandler={addButtonClickHandler} />
      </section>
    </div>
  );
}

export default ContactsPage;
