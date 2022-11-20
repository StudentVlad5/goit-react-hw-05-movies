import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #888;
  font-weight: 700;
  text-decoration: none;
  padding: 8px 3px;
  width: 100%;

  &:hover,
  &.active {
    background-color: rgba(84, 78, 114, 1);
    border-radius: 10px 0px 0px 10px;
    color: white;
  }
  `;
export const StyledLi = styled.li`
  list-style: none;
  display: flex;

  &:hover,
  &:active,
  ${NavItem}.active {
    background-color: rgba(84, 78, 114, 1);
    border-radius: 10px 0px 0px 10px;
    color: white;
  }
  background-color: ${(props) =>
    props.path ? "rgba(84, 78, 114, 1)" : "white"};
  border-radius: ${(props) => (props.path ? "0px 0px 0px 10px" : "0px")};
  color: ${(props) => (props.path ? "white" : "rgba(84, 78, 114, 1)")};
`;

export const StyledSection  = styled.section`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  padding: 8px 3px;
  width: 100%;
`;
export const StyledTitle = styled.div`
min-width: 300px;
max-width: 300px;
`
export const NumberPage  = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  padding: 8px 3px;
  width: 100%;
`;