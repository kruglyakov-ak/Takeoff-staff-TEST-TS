import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchContactsAction } from '../../store/api-actoins';
import { getContacts } from '../../store/selectors';
import ContactsList from '../contacts-list/contacts-list';

function ContactsPage(): JSX.Element {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  return (
    <div className="container">
      <section className="contacts">
        <Link to="/login">
          <span className="header__signout">Sign out</span>
        </Link>
        <h1 className="contacts__title">Contacts</h1>
        <ContactsList contacts={contacts}/>
      </section>
    </div>
  );
}

export default ContactsPage;
