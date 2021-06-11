import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <input
                    value={newTaskContent}
                    className="form__input"
                    type="text"
                    placeholder="Co jest do zrobienia?"
                    onChange={(event) => setNewTaskContent(event.target.value)}
                />
                <button className="form__button">Dodaj zadanie</button>
            </fieldset>
        </form>
    )
};

export default Form;