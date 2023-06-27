import styled from '@emotion/styled';

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  height: ${props => `${props.height}px`};
  border: 0;
  border-radius: 8px;
  background: ${props => props.bg};
  color: ${props => props.color};
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  cursor: pointer;
`;

export const IconPlus = styled.svg`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin-right: 8px;
  fill: ${props => props.fill};
  color: ${props => props.color};
`;
