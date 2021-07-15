import styled from "styled-components";

export const Wrapper = styled.section`
    margin-bottom: 10px 0;
    background-color: white;
    box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(235, 235, 235);
    padding: 20px;
`;

export const SectionTitle = styled.h2`
    margin: 0;
    font-size: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoints.small}px) {
    text-align: center;
    margin-left: 0;
    }
`;