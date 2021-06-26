import styled from "styled-components";

export const FormWrapper = styled.form`
    max-width: 1080px;
`;

export const Fieldset = styled.fieldset`
    border: none;
    display: flex;
    padding: 15px;
    justify-content: space-around;
    align-items: center;
    background-color: white;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        flex-direction: column;
        flex-wrap: wrap;
    }
`;

export const Input = styled.input`
    flex-grow: 1;
    padding: 10px;
    color: black;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    outline-color: ${({ theme }) => theme.colors.buttonsColor};
    margin-right: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 100%;
        margin-right: 0;
    }
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.colors.buttonsColor};
    color: white;
    padding: 10px;
    border: none;
    margin: 5px 10px;
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

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        width: 100%;
        margin: 10px 0;
    }
`;