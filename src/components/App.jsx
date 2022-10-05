import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { nanoid } from 'nanoid';
import Title from "./Title/Title";

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  }

  handleContactForm = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.id = nanoid();
    data.name = e.target[0].value;
    data.number = e.target[1].value;
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }))
    e.target.reset();
  }

  render() {
    const { contacts } = this.state;
    const { handleContactForm } = this;
    return (
      <>
        <Title title='PhoneBook'>
          <ContactForm handleContactForm={handleContactForm} />
        </Title>
        <Title title='Contacts'>
          <ContactList contacts={contacts} />
        </Title>
      </>
    )
  }
}

export default App;
