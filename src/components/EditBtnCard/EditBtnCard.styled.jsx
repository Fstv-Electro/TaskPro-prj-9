import styled from '@emotion/styled';

export const Btn = styled.button`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: transparent;
  border: transparent;
  border-radius: 50%;
  color: var(--last-text-color);
  cursor: pointer;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1),
  scale 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: var(--button-bg-color);
    scale: 1.4;
  }
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: currentColor;
  flex-shrink: 0;
`;