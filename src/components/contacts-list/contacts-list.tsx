import { getContacts } from '../../store/selectors';
import { useSelector } from 'react-redux';
import ContactsItem from '../contacts-item/contacts-item';

function ContactsList(): JSX.Element {
  const contacts = useSelector(getContacts);

  return (
    <table className="contacts__table">
      <tbody>
        <tr>
          <td className="contacts__table-title"></td>
          <td className="contacts__table-title">Name</td>
          <td className="contacts__table-title">E-mail</td>
          <td className="contacts__table-title">Phone number</td>
        </tr>
        {contacts.map((contact) => (<ContactsItem contact={contact} key={contact.id} />))}
      </tbody>
    </table>
  );
}

export default ContactsList;
