import styled from '@emotion/styled';

export const WrapperBoards = styled.div`
  border-bottom: 1px solid #ffffff1a;
  margin-bottom: 9px;
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
`;

export const CreateTitle = styled.p`
  width: 76px;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const CreateButton = styled.button`
  border-radius: 6px;
  background: #bedbb0;
  width: 40px;
  height: 36px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #92a787;
  }
`;
