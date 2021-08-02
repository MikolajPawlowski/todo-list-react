import styled from "styled-components";

export default styled.button`
    background: transparent;
    color: ${({ theme }) => theme.colors.primaryColor};
    border: none;
    margin: 0 0 0 20px;
    transition: filter 0.5s;
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