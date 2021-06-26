import styled from "styled-components";

export const FormWrapper = styled.form`
    max-width: 1080px;
`;

export const Fieldset = styled.fieldset`
    border: none;
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 15px;
    grid-gap: 10px;
    background-color: white;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    color: black;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    outline-color: ${({ theme }) => theme.colors.buttonsColor};
`;

export const FormButton = styled.button`
    background-color: ${({ theme }) => theme.colors.buttonsColor};
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.buttonsColorHover};
        transform: scale (1.1);
        transition: .5s ease-out;
    }

    &:active {
        background: ${({ theme }) => theme.colors.buttonsActive};
        transform: scale (1.05);
        transition: .5s ease-out;
    }
`;