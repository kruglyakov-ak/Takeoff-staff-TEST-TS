import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchContactsAction } from '../../store/api-actoins';
import { getContacts } from '../../store/selectors';
import ContactsList from '../contacts-list/contacts-list';

function ContactsPage(): JSX.Element {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [isActiveAddMode, setIsActiveAddMode] = useState(false);

  const addButtonClickHandler = (isActive: boolean) => {
    setIsActiveAddMode(isActive);
  };

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  return (
    <div className="container">
      <div className='header-nav'>
        <Link to="/login">
          <span className="header__signout">Sign out</span>
        </Link>
        <button onClick={() => setIsActiveAddMode(true)}>+Add new contact</button>
      </div>
      <section className="contacts">
        <h1 className="contacts__title">Contacts</h1>
        <ContactsList contacts={contacts} isActiveAddMode={isActiveAddMode} addButtonClickHandler={addButtonClickHandler}/>
      </section>
    </div>
  );
}

export default ContactsPage;
