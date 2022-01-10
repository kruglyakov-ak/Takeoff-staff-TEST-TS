import ContactsItem from '../contacts-item/contacts-item';
import { Contact } from '../../types/contact';
import { useState } from 'react';
import { NameInputs } from '../../const';
import { useDispatch } from 'react-redux';
import { addNewContactAction } from '../../store/api-actoins';

type ContactsListProps = {
  contacts: Contact[],
  isActiveAddMode: boolean,
  addButtonClickHandler: (isActive: boolean) => void,
}

function ContactsList({ contacts, isActiveAddMode, addButtonClickHandler }: ContactsListProps): JSX.Element {
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState<string>('');
  const [emailValue, setEmailValue] = useState<string>('');
  const [telValue, setTelValue] = useState<string>('');
  const contactData = {
    name: nameValue,
    email: emailValue,
    tel: telValue,
  };
  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    switch (target.name) {
      case NameInputs.Name:
        setNameValue(target.value);
        break;
      case NameInputs.Email:
        setEmailValue(target.value);
        break;
      case NameInputs.Tel:
        setTelValue(target.value);
        break;
    }
  };

  const handleClickAddContact = () => {
    setNameValue('');
    setEmailValue('');
    setTelValue('');
    addButtonClickHandler(!isActiveAddMode);
  };

  const handleSubmitAddContact = () => {
    dispatch(addNewContactAction(contactData));
    setNameValue('');
    setEmailValue('');
    setTelValue('');
    addButtonClickHandler(!isActiveAddMode);
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
        {isActiveAddMode &&
          <tr>
            <td>
              <input type="submit" value="Add" onClick={handleSubmitAddContact} />
              <input type="button" value="Cancel" onClick={handleClickAddContact} />
            </td>
            <td>
              <input
                className="contacts__table-input"
                type="text"
                id="name-1"
                name="name"
                value={`${nameValue}`}
                onChange={handleInput}
              />
            </td>
            <td>
              <input
                className="contacts__table-input"
                type="email"
                id="email-1"
                name="email"
                value={`${emailValue}`}
                onChange={handleInput}
              />
            </td>
            <td>
              <input
                className="contacts__table-input"
                type="tel"
                id="phone-1"
                name="tel"
                value={`${telValue}`}
                onChange={handleInput}
              />
            </td>
          </tr>}
        {contacts.map((contact) => (<ContactsItem contact={contact} key={contact.id} />))}
      </tbody>
    </table>
  );
}

export default ContactsList;
