import styled from '@emotion/styled';

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => `${props.height}px`};
  border: 0;
  border-radius: 8px;
  background: ${props => props.bg};
  color: ${props => props.color};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(0.97);
  }

  &:focus {
    transform: scale(1.03);
  }

  @media (min-width: 375px) {
    width: ${props => `${props.width}px`};
  }
`;

export const IconPlus = styled.svg`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin-right: 8px;
  fill: ${props => props.fill};
  color: ${props => props.color};
`;
