import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NameInputs } from '../../const';
import { deleteContactAction, updateContactAction } from '../../store/api-actoins';
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
  const [isActiveDeleteMode, setIsDeleteChangeMode] = useState(false);
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

  const handleClickDeleteContact = () => {
    setIsDeleteChangeMode(!isActiveDeleteMode);
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

  const handleSubmitChangeContact = () => {
    dispatch(updateContactAction(id, contactData));
    setIsActiveChangeMode(!isActiveChangeMode);
  };

  const handleDeleteContact = () => {
    dispatch(deleteContactAction(id));
    setIsDeleteChangeMode(!setIsDeleteChangeMode);
  };

  const renderOkButtons = () => {
    switch (true) {
      case isActiveChangeMode:
        return (
          <td>
            <input type="submit" value="Change" onClick={handleSubmitChangeContact} />
            <input type="button" value="Cancel" onClick={handleClickChangeContact} />
          </td>
        );
      case isActiveDeleteMode:
        return (
          <td>
            <input type="submit" value="Delete" onClick={handleDeleteContact} />
            <input type="button" value="Cancel" onClick={handleClickDeleteContact} />
          </td>
        );
    }
  };

  return (
    <tr className={isActiveChangeMode || isActiveDeleteMode ?
      'contacts__table-column contacts__table-column--active' :
      'contacts__table-column'}
    >

      {isActiveChangeMode || isActiveDeleteMode ?
        renderOkButtons() :
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
            onClick={handleClickDeleteContact}
          />
        </td>}
      <td>
        <input
          className="contacts__table-input"
          type="text"
          id="name-1"
          name="name"
          value={`${nameValue}`}
          onChange={handleInput}
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
          onChange={handleInput}
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
          onChange={handleInput}
          disabled={!isActiveChangeMode}
        />
      </td>
    </tr>);
}

export default ContactsItem;
