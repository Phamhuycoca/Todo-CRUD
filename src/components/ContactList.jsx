import ContactListItem from "./ContactListItem";

const ContactList = (props) => {
  const { contacts, handleEdit, handleDelete } = props;

  return (
    <ul className="list-group">
      {contacts.map((contact, i) => (
        <ContactListItem
          index={i}
          data={contact}
          handleClickEdit={handleEdit}
          handleClickRemove={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
