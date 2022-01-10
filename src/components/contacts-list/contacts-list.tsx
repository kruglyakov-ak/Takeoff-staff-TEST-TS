import { useDispatch } from 'react-redux';
import ContactsItem from '../contacts-item/contacts-item';
import { deleteContactAction } from '../../store/api-actoins';
import { Contact } from '../../types/contact';

type ContactsListProps = {
  contacts: Contact[],
}

function ContactsList({ contacts }: ContactsListProps): JSX.Element {
  const dispatch = useDispatch();

  const onDeleteContact = (id: number) => {
    dispatch(deleteContactAction(id));
  };

  return (
    <table className="contacts__table">
      <tbody>
        <tr>
          <td className="contacts__table-title"></td>
          <td className="contacts__table-title">Name</td>
          <td className="contacts__table-title">E-mail</td>
          <td className="contacts__table-title">Phone number</td>
        </tr>
        {contacts.map((contact) => (<ContactsItem contact={contact} onDeleteContact={onDeleteContact} key={contact.id} />))}
      </tbody>
    </table>
  );
}

export default ContactsList;
