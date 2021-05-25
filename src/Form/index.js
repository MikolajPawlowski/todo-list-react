import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <input className="form__input" type="text" placeholder="Co jest do zrobienia?" />
            <button className="form__button">Dodaj zadanie</button>
        </fieldset>
    </form>
)

export default Form;