import React, { useState, useRef } from "react";
import { FormWrapper, Fieldset, Input, Button } from "./styled";

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
                <Button
                    onClick={() => inputRef.current.focus()}
                >
                    Dodaj zadanie
                </Button>
            </Fieldset>
        </FormWrapper>
    )
};

export default Form;