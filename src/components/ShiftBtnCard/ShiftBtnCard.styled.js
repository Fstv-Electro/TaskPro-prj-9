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
  color: #ffffff;
  cursor: pointer;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1),
  scale 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: var(--button-bg-color);
    scale: 1.4;
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
  right: -45px;
  top: -10%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 4px;
  margin: 0px;
  max-height: 0px;
  padding: 0 44px 0 18px;

  overflow: hidden;
  list-style: none;
  cursor: pointer;
  background: #161616;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;

  &.active {
    max-height: 107px;
    padding: 18px 44px 18px 18px;
  }
`;

export const Item = styled.li``;

export const ItemBtn = styled.button`
  height: 21px;
  margin: 0;
  padding: 0;
  text-align: left;
  text-transform: capitalize;
  font-size: 14px;
  letter-spacing: -0.28px;
  border: none;
  background: transparent;
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  color: ${({ selected }) =>
    selected ? '#BEDBB0' : 'rgba(255, 255, 255, 0.50);'};
  transition: all 0.3s ease-out;

  &:hover {
    text-shadow: ${({ disabled }) =>
      !disabled ? '0 1px 4px rgba(190, 219, 176, 1)' : ''};
    transform: ${({ disabled }) => (!disabled ? 'scale(1.1)' : 'scale(1)')};
  }
`;
