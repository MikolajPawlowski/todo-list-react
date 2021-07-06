import React, { useState, useRef } from "react";
import { StyledForm, Fieldset, Input, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
        inputRef.current.focus();
    }

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <Fieldset>
                <Input
                    ref={inputRef}
                    value={newTaskContent}
                    required
                    placeholder="Co jest do zrobienia?"
                    onChange={({ target }) => setNewTaskContent(target.value)}
                />
                <FormButton>
                    Dodaj zadanie
                </FormButton>
            </Fieldset>
        </StyledForm>
    )
};

export default Form;