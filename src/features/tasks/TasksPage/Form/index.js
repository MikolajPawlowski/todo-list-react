import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { StyledForm, Fieldset, Input, FormButton } from "./styled";
import { addTask } from "../../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

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