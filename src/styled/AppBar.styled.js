import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const HeaderItem = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
  `;
  export const NavItem = styled(NavLink)`
    list-style: none;
    display: flex;
    font-weight: 700;
    font-size: 26px;
    text-decoration: none;
    padding: 10px 10px;
    &:hover,
    &.active {
      background-color: rgba(84, 78, 114, 1);
      border-radius: 10px 0px 0px 10px;
      color: white;
    }
  
    &.active {
      color: #f8dc2f;
    }

    `;
export const StyledLi = styled.li`
    list-style: none;
    display: flex;
    font-weight: 700;
    font-size: 26px;
    text-decoration: none;
    padding: 10px 10px;

    &:hover,
    &.active {
      background-color: rgba(84, 78, 114, 1);
      border-radius: 10px 0px 0px 10px;
      color: white;
    }
  
    &.active {
      color: #f8dc2f;
    }

`;


