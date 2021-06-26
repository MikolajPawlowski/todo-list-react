import React, { useState, useRef } from "react";
import { FormWrapper, Fieldset, Input, FormButton } from "./styled";

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
    }

    return (
        <FormWrapper
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
                <FormButton
                    onClick={() => inputRef.current.focus()}
                >
                    Dodaj zadanie
                </FormButton>
            </Fieldset>
        </FormWrapper>
    )
};

export default Form;