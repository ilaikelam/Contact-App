import styles from "./ContactItems.module.css";

function ContactItems({ data, deleteHandler }) {
  return (
    <div className={styles.container}>
      <h3>ContactList</h3>
      {data.length ? (
        <ul className={styles.contacts}>
          {data.map((contact) => (
            <li key={contact.id} className={styles.item}>
              <p>
                {contact.firstName} {contact.lastName}
              </p>
              <p>
                <span>{contact.email}</span>
              </p>
              <p>
                <span>{contact.phone}</span>
              </p>
              <button onClick={() => deleteHandler(contact.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contacts yet</p>
      )}
    </div>
  );
}

export default ContactItems;
