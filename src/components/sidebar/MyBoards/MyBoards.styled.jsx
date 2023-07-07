import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 0;
  margin: 0;
  &:last-child {
    margin-bottom: 40px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 61px;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const NavItem = styled(NavLink)`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 260px;
  height: 100%;
  text-decoration: none;
  background-color: transparent;
  opacity: 0.5;
  transition: all 550ms cubic-bezier(0.4, 0, 0.2, 1);

  transition: border 550ms cubic-bezier(0.4, 0, 0.2, 1);
  &:not(.active):hover {
    border-bottom: 1px solid var(--sidebar-bg-icon-logout-color);
    margin-bottom: -1px;
    div {
      opacity: 1;
    }
  }
  &:active {
    background-color: var(--sidebar-active-bg-color);
  }

  &.active {
    background-color: var(--sidebar-active-bg-color);
    outline: none;
    width: calc(100% + 24px);
    padding-left: 24px;
    margin-left: -24px;
    opacity: 1;

    div {
      opacity: 1;
    }

    @media (max-width: 768px) {
      width: calc(100% + 14px);
      padding-left: 14px;
      margin-left: -14px;
    }
    &:after {
      content: '';
      display: flex;
      border-radius: 4px 0px 0px 4px;
      background: var(--sidebar-bg-icon-logout-color);
      width: 4px;
      height: 61px;
    }
  }
`;

export const WrapperProjectOffice = styled.button`
  display: flex;
  align-items: center;
  color: var(--bord-list-color);
  border: none;
  background: none;
  cursor: pointer;
  width: 100%;
`;

export const Project = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-left: 8px;
`;

export const WrapperProjectIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  opacity: 0;
  transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IconEdit = styled.svg`
  width: 16px;
  height: 16px;
  color: var(--bord-list-color);
  opacity: 0.5;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: blue;
  }
`;

export const IconDelete = styled.svg`
  width: 16px;
  height: 16px;
  color: var(--bord-list-color);
  opacity: 0.5;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: tomato;
  }
`;
