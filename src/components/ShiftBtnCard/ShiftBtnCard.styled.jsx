import styled from '@emotion/styled';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  flex-shrink: 0;
  background-color: transparent;
  border: transparent;
  border-radius: 50%;
  color: var(--last-text-color); 
  cursor: pointer;
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: var(--button-bg-color);
  }
`;

export const IconShift = styled.svg`
  width: 16px;
  height: 16px;
  stroke: currentColor;
  flex-shrink: 0;
`;

export const ColumnList = styled.ul`
  position: absolute;
  right: 47%;
  bottom: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  margin: 0px;
  max-height: 0px;
  padding: 0 44px 0 18px;

  overflow: hidden;
  list-style: none;
  cursor: pointer;
  background: var(--main-last-bg-color);  
  border-radius: 8px;
  transition: all 0.3s ease-out;
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;

  &.active {
    max-height: none;
    padding: 18px 18px 18px 18px;
    height: 114px;
    overflow: scroll;
  }
`;

export const Item = styled.li`
  width: 100%;
`;

export const ItemBtn = styled.button`
  height: 21px;
  width: 100%;
  display: flex;
  gap: 8px;
  flex-wrap: no-wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  text-transform: capitalize;
  font-size: 14px;
  letter-spacing: -0.28px;
  border: none;
  background: transparent;
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  color: ${({ selected }) =>
    selected ? 'var(--button-bg-color)' : 'var(--last-text-color)'};
  transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #bedbb0;
  }

  &:active {
    color: #bedbb0;
  }
`;
