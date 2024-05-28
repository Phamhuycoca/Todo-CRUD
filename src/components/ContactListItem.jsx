const ContactListItem = (props) => {
  const { data, index, handleClickEdit, handleClickRemove } = props;
  return (
    <li className="list">
      <div key={index} className="content">
        {data}
      </div>
      <div>
        <button onClick={() => handleClickEdit(index)} className="btn edit">
          Edit
        </button>
        <button onClick={() => handleClickRemove(index)} className="btn remove">
          Remove
        </button>
      </div>
    </li>
  );
};

export default ContactListItem;
