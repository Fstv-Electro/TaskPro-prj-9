import styled from '@emotion/styled';

export const Btn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: transparent;
  border: transparent;
  border-radius: 50%;
  color: currentColor;
  cursor: pointer;
  transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    /* border: 1px solid #bedbb0; */
    background-color: var(--button-bg-color);
    
  }
`;

export const IconClose = styled.svg`
  width: 18px;
  height: 18px;
  stroke: currentColor;
  flex-shrink: 0;
`;
