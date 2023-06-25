import styled from '@emotion/styled';

export const Button = styled.button`
  width: 334px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  border-radius: 8px;
  background: #121212;
  color: #fff;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(0.97);
  }

  &:focus {
    transform: scale(1.03);
  }
`;

export const IconPlus = styled.svg`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin-right: 8px;
  fill: #ffffff;
  color: #121212;
`;
