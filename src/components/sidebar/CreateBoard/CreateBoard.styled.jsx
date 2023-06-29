import styled from '@emotion/styled';

export const WrapperBoards = styled.div`
  border-bottom: 1px solid #ffffff1a;
  margin-bottom: 9px;
  margin-right: 24px;
`;

export const Boards = styled.p`
  font-size: 16px;
  font-family: Poppins;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  letter-spacing: -0.24px;
`;

export const WrapperCreate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ffffff1a;
  margin-bottom: 40px;
    margin-right: 24px;
`;

export const CreateTitle = styled.p`
  width: 76px;
  font-size: 14px;
  font-family: Poppins;
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
  background: #bedbb0;
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
  fill: #bedbb0;
  color: #121212;
`;
