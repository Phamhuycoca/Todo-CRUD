import { useSelector, useDispatch } from "react-redux";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import {
  createContact,
  removeContact,
  updateContact,
} from "../actions/contact";

function Contact() {
  const contacts = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const handleSubmit = (name) => {
    dispatch(createContact(name));
  };

  const handleEdit = (index) => {
    let content = prompt("Nội dung...");
    content && dispatch(updateContact(index, content));
  };

  const handleDelete = (index) => {
    dispatch(removeContact(index));
  };

  return (
    <div className="container">
      <h1>Contact Form</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <hr />
      <ContactList
        contacts={contacts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Contact;
