import styled, {css} from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 20px 20px;
    margin: 0;
`;

export const Item = styled.li`
    display: flex;
    padding: 10px 10px;
    align-items: center;
    border-bottom: 1px solid rgb(235, 235, 235);

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const StyledNavLink = styled.p``;