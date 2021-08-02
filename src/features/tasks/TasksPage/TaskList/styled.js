import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const StyledLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  &.${activeClassName} {
    font-weight: bold;
  }

  &:hover {
    border-bottom: 2px solid;
  }
`;

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

export const Content = styled.span`
    word-break: break-word;
    flex-grow: 1;
    
    ${({ done }) => done && css`
        text-decoration-line: line-through;
    `}
`;

export const Button = styled.button`
    height: 30px;
    width: 30px;
    margin: 0 10px;
    border: none;
    color: white;
    flex-shrink: 0;
    cursor: pointer;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.colors.doneIconColor};

        &:hover {
        background-color: ${({ theme }) => theme.colors.doneIconColorHover};
        transition: .5s ease-out;
        }

        &:active {
        background-color: ${({ theme }) => theme.colors.doneIconColorActive};
        transition: .5s ease-out;
        }
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.colors.deleteIconColor};
    
        &:hover {
        background-color: ${({ theme }) => theme.colors.deleteIconColorHover};
        transition: .5s ease-out;
        }

        &:active {
        background-color: ${({ theme }) => theme.colors.deleteIconColorActive};
        transition: .5s ease-out;
        }    
    `}
`;