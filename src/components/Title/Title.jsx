import css from './title.module.css'

const Title = ({ title, children }) => (
    <div className={css.container}>
        <h2>{title}</h2>
        {children}
    </div>
)

export default Title;