import styled from '@emotion/styled';
import { FiHelpCircle } from 'react-icons/fi';

import { LuPuzzle } from 'react-icons/lu';

import { BsLightningCharge } from 'react-icons/bs';

export const Container = styled.div`
  /* display: inline-flex; */
  width: 260px;
  align-items: center;
  position: relative;
  padding: 24px 24px 24px 24px;
  color: #fff;
  background: #121212;
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-family: Poppins;
  font-weight: 600;
  letter-spacing: -0.64px;
  /* margin-left: 9px; */
`;

export const Lightning = styled(BsLightningCharge)`
  width: 16px;
  height: 16px;
  /* position: absolute; */
  right: 7px;
  top: 9px;
`;

export const WrapperNeonProject = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
`;

export const NeonProject = styled.p`
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const Puzzle = styled(LuPuzzle)`
  width: 16px;
  height: 16px;
  /* position: absolute; */
  right: 7px;
  top: 9px;
  margin-right: 8px;
`;
