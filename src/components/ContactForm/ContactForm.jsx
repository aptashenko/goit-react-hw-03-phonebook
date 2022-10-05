import css from './contactForm.module.css'

const ContactForm = ({handleContactForm}) => (
    <form className={css.form} onSubmit={handleContactForm}>
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
        <button className={css.button}>Add contact</button>
    </form>
)

export default ContactForm;