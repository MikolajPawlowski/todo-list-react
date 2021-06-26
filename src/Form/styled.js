import styled from "styled-components";

export const FormWrapper = styled.form`
    max-width: 1080px;
`;

export const Fieldset = styled.fieldset`
    margin: 0 auto;
    border: none;
    display: flex;
    padding: 20px;
    background-color: white;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        padding: 5px;
        flex-direction: column;
    }
`;

export const Input = styled.input`
    flex-grow:1;
    margin-right: 10px;
    padding: 10px;
    color: black;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    outline-color: ${({ theme }) => theme.colors.buttonsColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        margin: 0 0 10px;
    }
`;

export const FormButton = styled.button`
    background-color: ${({ theme }) => theme.colors.buttonsColor};
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    flex-shrink: 0;
    transition: background-color 0.5s, transform 0.5s;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.buttonsColorHover};
        transform: scale(1.05);
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.buttonsActive};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        flex-basis: 100%;
        margin: 5px 0px;
    }
`;