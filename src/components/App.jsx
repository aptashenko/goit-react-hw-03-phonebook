import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

class App extends React.Component {
  state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    ],
    name: '',
  }

  handleContactForm(e) {
    e.preventDefault();
    console.log(e.target);
  }

  render() {
    const { contacts } = this.state;
    const { handleContactForm } = this;
    return (
      <>
        <ContactForm handleContactForm={handleContactForm} />
        <ContactList contacts={contacts} />
      </>
    )
  }
}

export default App;
