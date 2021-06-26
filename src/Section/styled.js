import styled from "styled-components";

export const Wrapper = styled.section`
    margin-bottom: 10px 0;
    background-color: white;
    box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    border-bottom: 1px solid rgb(235, 235, 235);
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        grid-template-columns: 1fr;
    }
`;

export const SectionTitle = styled.h2`
    margin: 0;
    font-size: 20px;

    @media(max-width:767px) {
    text-align: center;
    margin-left: 0;
    }
`;