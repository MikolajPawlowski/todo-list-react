import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryColor};
    border: none;
    margin: 0 0 0 20px;
    outline: none;
    transition: color .5s ease-out;
    cursor: pointer;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
        flex-basis: 100%;
        margin: 10px 0;
    }
    
    &:hover{
        color: ${({ theme }) => theme.colors.buttonsColorHover};
    }

    &:disabled{
        color: ${({ theme }) => theme.colors.buttonsColorDisabled}
    }
`;