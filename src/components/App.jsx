import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Title from "./Title/Title";
import Filter from "./Filter/Filter";
import ContactItem from "./ContactItem/ContactItem";

class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const localStorageContacts = localStorage.getItem('contacts');
    localStorageContacts && this.setState(({
      contacts: JSON.parse(localStorage.getItem('contacts'))
    }));;
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleContactForm = (data) => {
    const isContactExist = this.state.contacts.some(contact => contact.name === data.name);
    if (isContactExist) {
      alert(`${data.name} is alredy in contacts`)
    } else {
      this.setState(prevState => ({ contacts: [...prevState.contacts, data] }));
    }
  }


  handleFilter = (e) => {
    this.setState(({ filter: e.target.value }));
  }

  deleteContact = (id) => {
    const newContacts = this.state.contacts.filter(contact => contact.id !== id)
    this.setState({
      contacts: newContacts,
    })
  }

  render() {
    const { handleContactForm, handleFilter, deleteContact } = this;
    const normalizerFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizerFilter))
    return (
      <div className="wrapper">
        <Title title='PhoneBook'>
          <ContactForm handleContactForm={handleContactForm} />
        </Title>
        <Title title='Contacts'>
          <Filter onChange={handleFilter} />
          <ContactList>
            <ContactItem contacts={filteredContacts} deleteContact={deleteContact} />
          </ContactList>
        </Title>
      </div>
    )
  }
}

export default App;
