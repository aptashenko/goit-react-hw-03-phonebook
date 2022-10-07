import React from 'react';
import css from './contactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends React.Component {
    state = {
        name: '',
        number: '',
    }

    addContact = (e) => {
        e.preventDefault();
        const data = {};
        data.id = nanoid();
        data.name = e.target[0].value;
        data.number = e.target[1].value;
        this.props.handleContactForm(data);
        e.target.reset();
    }
    
    render() {
        const { addContact } = this;
        return (
            <form className={css.form} onSubmit={addContact} >
                <label className={css.label}>Name
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className={css.label}>Number
                    <input
                        className={css.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={css.button}>Add contact</button>
            </form>
        )
    }
}

export default ContactForm;