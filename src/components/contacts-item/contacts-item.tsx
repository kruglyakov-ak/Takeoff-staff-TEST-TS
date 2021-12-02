import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContactAction } from '../../store/api-actoins';
import { Contact } from '../../types/contact';

type ContactsItemProps = {
  contact: Contact,
}

function ContactsItem({ contact }: ContactsItemProps): JSX.Element {
  const dispatch = useDispatch();
  const {
    name,
    email,
    tel,
    id,
  } = contact;

  const [isActiveChangeMode, setIsActiveChangeMode] = useState(false);
  const [nameValue, setNameValue] = useState<string>(name);
  const [emailValue, setEmailValue] = useState<string>(email);
  const [telValue, setTelValue] = useState<string>(tel);

  const contactData = {
    name: nameValue,
    email: emailValue,
    tel: telValue,
  };
  const handleClickChangeContact = () => {
    setNameValue(name);
    setEmailValue(email);
    setTelValue(tel);
    setIsActiveChangeMode(!isActiveChangeMode);
  };
  const handleNameInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(target.value);
  };
  const handleEmailInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(target.value);
  };
  const handleTelInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setTelValue(target.value);
  };
  const handleSubmitChangeContact = () => {
    dispatch(updateContactAction(id, contactData));
    setIsActiveChangeMode(!isActiveChangeMode);
  };

  return (
    <tr className={isActiveChangeMode ?
      'contacts__table-column contacts__table-column--active' :
      'contacts__table-column'}
    >
      {isActiveChangeMode ?
        <td>
          <input type="submit" value="Ok" onClick={handleSubmitChangeContact} />
          <input type="submit" value="Cancel" onClick={handleClickChangeContact} />
        </td> :
        <td className="contacts__table-control-column">
          <img
            src='https://img.icons8.com/pastel-glyph/20/000000/ball-point-pen.png'
            alt="change contact"
            title='Change contact'
            onClick={handleClickChangeContact}
          />
          <img
            className="contacts__table-delete"
            src="https://img.icons8.com/office/20/000000/delete-sign.png"
            alt="delete contact"
            title="Delete contact"
          />
        </td>}
      <td>
        <input
          className="contacts__table-input"
          type="text"
          id="name-1"
          name="name"
          value={`${nameValue}`}
          onChange={handleNameInput}
          disabled={!isActiveChangeMode}
        />
      </td>
      <td>
        <input
          className="contacts__table-input"
          type="email"
          id="email-1"
          name="email"
          value={`${emailValue}`}
          onChange={handleEmailInput}
          disabled={!isActiveChangeMode}
        />
      </td>
      <td>
        <input
          className="contacts__table-input"
          type="tel"
          id="phone-1"
          name="tel"
          value={`${telValue}`}
          onChange={handleTelInput}
          disabled={!isActiveChangeMode}
        />
      </td>
    </tr>);
}

export default ContactsItem;
