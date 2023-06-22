import styled from '@emotion/styled';
import { AiOutlinePlus } from 'react-icons/ai';

export const Container = styled.div`
  /* display: inline-flex; */
  width: 260px;
  align-items: center;
  /* position: relative; */
  /* padding: 24px 24px 24px 24px; */
  color: #fff;
  background: #121212;
`;

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
  font-family: Poppins;
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
`;

export const Plus = styled(AiOutlinePlus)`
  width: 16px;
  height: 16px;

  right: 7px;
  top: 9px;
`;
