import styled from '@emotion/styled';
import { FiHelpCircle } from 'react-icons/fi';

export const Container = styled.div`
  width: 212px;
  height: 272px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  background: #1f1f1f;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: 'Poppins';
  line-height: 20px;
`;

export const Span = styled.span`
  color: #bedbb0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  border: none;
  color: #fff;
  background: #1f1f1f;
`;

export const Help = styled(FiHelpCircle)`
  width: 16px;
  height: 16px;
  /* position: absolute; */
  right: 7px;
  top: 9px;
  margin-right: 8px;
`;
