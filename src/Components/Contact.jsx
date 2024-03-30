import { useState } from "react";
import ContactItems from "./ContactItems";
import { v4 } from "uuid";

import styles from "./Contact.module.css";

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [form, setForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((form) => ({ ...form, [name]: value, id: v4() }));
  };
  const contactHandler = () => {
    if (!form.firstName || !form.lastName || !form.email || !form.phone) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    setContacts((contacts) => [...contacts, form]);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <>
      <div className={styles.form}>
        <input
          type="text"
          name="firstName"
          onChange={changeHandler}
          placeholder="FirstName"
          value={form.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={changeHandler}
          placeholder="LastName"
          value={form.lastName}
        />
        <input
          type="email"
          name="email"
          onChange={changeHandler}
          placeholder="Email"
          value={form.email}
        />
        <input
          type="number"
          name="phone"
          onChange={changeHandler}
          placeholder="Phone"
          value={form.phone}
        />
        <button onClick={contactHandler}>Add Contact</button>
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactItems data={contacts} deleteHandler={deleteHandler} />
    </>
  );
}

export default Contact;
