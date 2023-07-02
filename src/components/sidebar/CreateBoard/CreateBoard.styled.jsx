import styled from '@emotion/styled';

export const WrapperBoards = styled.div`
  border-bottom: 1px solid var(--sidebar-line-color);
  margin-bottom: 9px;
  margin-right: 24px;
  padding-bottom: 8px;
`;

export const Boards = styled.p`
  font-size: 12px;
  letter-spacing: -0.24px;
  opacity: 0.5;
`;

export const WrapperCreate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--sidebar-line-color);
  margin-bottom: 40px;
  margin-right: 24px;
  padding-top: 14px;
  padding-bottom: 14px;
`;

export const CreateTitle = styled.p`
  width: 76px;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const CreateButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40px;
  height: 36px;
  border-radius: 8px;
  background: var(--sidebar-bg-icon-plus-color);
  border: none;
  outline: none;
  cursor: pointer;
  transform: scale(1);
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(1.1);
  }
`;

export const IconPlus = styled.svg`
  flex-shrink: 0;
  fill: var(--sidebar-bg-icon-plus-color);
  color: var(--color-icon-plus);
`;
