import styled from "styled-components";

export default styled.input`
    flex-grow:1;
    margin-right: 10px;
    padding: 10px;
    color: black;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
    outline-color: ${({ theme }) => theme.colors.primaryColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        margin: 0 0 10px;
    }
`;