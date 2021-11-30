import { Contact } from '../../types/contact';

type ContactsItemProps = {
  contact: Contact,
}

function ContactsItem({ contact }: ContactsItemProps): JSX.Element {
  const {
    name,
    email,
    tel,
  } = contact;

  return (
    <tr className="contacts__table-column">
      <td className="contacts__table-control-column contacts__table-control-column">
        <img src="https://img.icons8.com/pastel-glyph/20/000000/ball-point-pen.png" alt="change contact" />
        <img className="contacts__table-delete" src="https://img.icons8.com/office/20/000000/delete-sign.png" alt="delete contact" />
      </td>
      <td><input className="contacts__table-input" type="text" id="name-1" name="name" defaultValue={`${name}`} disabled /></td>
      <td><input className="contacts__table-input" type="email" id="email-1" name="email" defaultValue={`${email}`} disabled /></td>
      <td><input className="contacts__table-input" type="tel" id="phone-1" name="tel" defaultValue={`${tel}`} disabled /></td>
    </tr>
  );
}

export default ContactsItem;
