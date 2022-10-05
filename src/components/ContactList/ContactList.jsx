import css from './contactList.module.css'

const ContactList = ({contacts}) => (
    <ul className={css.list}>
        {contacts.map(({name, number, id}) => {
            return <li key={id}><span>{name}</span> <span>{ number }</span></li>
        })}
    </ul>
)

export default ContactList;