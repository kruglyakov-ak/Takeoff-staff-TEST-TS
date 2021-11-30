import { Link } from 'react-router-dom';
import ContactsList from '../contacts-list/contacts-list';

function ContactsPage(): JSX.Element {
  return (
    <div className="container">
      <section className="contacts">
        <Link to="/login">
          <span className="header__signout">Sign out</span>
        </Link>
        <h1 className="contacts__title">Contacts</h1>
        <ContactsList />
      </section>
    </div>
  );
}

export default ContactsPage;
