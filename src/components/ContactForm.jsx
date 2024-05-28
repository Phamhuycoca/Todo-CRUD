import { useState } from "react";

const ContactForm = (props) => {
  const [name, setName] = useState();
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e, name) => {
    e.preventDefault();
    name && props.handleSubmit(name);
    setName("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, name)}>
      <input
        type="text"
        onChange={handleChange}
        className="input"
        value={name}
      />
      <br />
      <input type="submit" className="btn submit" value="ADD" />
    </form>
  );
};

export default ContactForm;
