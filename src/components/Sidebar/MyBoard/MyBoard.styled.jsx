import styled from '@emotion/styled';
import { AiOutlineAppstore } from 'react-icons/ai';
import { FiEdit2, FiHelpCircle } from 'react-icons/fi';
import { RiDeleteBin7Line } from 'react-icons/ri';

export const Container = styled.div`
  /* display: inline-flex; */
  width: 260px;
  align-items: center;
  /* position: relative;
  padding: 24px 24px 24px 24px; */
  color: #fff;
  background: #121212;
`;

export const WrapperProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-right: 1px solid #bedbb0;
  background-color: #1f1f1f;
  /* border-radius: 4px 0px 0px 4px;
  background: #BEDBB0; */
  margin-bottom: 24px;
`;

export const WrapperProjectOffice = styled.div`
  display: flex;
  align-items: center;
`;

export const Project = styled.p`
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const Appstore = styled(AiOutlineAppstore)`
  width: 16px;
  height: 16px;
  /* position: absolute; */
  right: 7px;
  top: 9px;
  margin-right: 8px;
`;

export const Edit = styled(FiEdit2)`
  width: 16px;
  height: 16px;
  /* position: absolute; */
  right: 7px;
  top: 9px;
  margin-right: 8px;
`;

export const Delete = styled(RiDeleteBin7Line)`
  width: 16px;
  height: 16px;
  /* position: absolute; */
  right: 7px;
  top: 9px;
  margin-right: 8px;
`;

export const WrapperProjectIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
`;
