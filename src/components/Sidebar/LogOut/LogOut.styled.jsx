import styled from '@emotion/styled';
import { GoSignOut } from 'react-icons/go';

export const Container = styled.div`
  /* display: inline-flex; */
  width: 260px;
  align-items: center;
  /* position: relative;
  padding: 24px 24px 24px 24px; */
  color: #fff;
  background: #121212;
`;

export const WrapperLogOut = styled.div`
  display: flex;
  align-items: center;
`;

export const LogOutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
  color: #fff;
`;

export const LogOutIcon = styled(GoSignOut)`
  width: 16px;
  height: 16px;
  /* position: absolute; */
  right: 7px;
  top: 9px;
  margin-right: 8px;
`;
