import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  min-height: 100%;
  padding-left: 20px;
  padding-right: 20px;

  height: 100vh;

  /* border: solid 1px red; */

  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
`;

export const Images = styled.img`
  width: 124px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 162px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin: 0;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  color: #161616;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1.12px;
  margin: 0;
`;

export const Icon = styled.svg`
  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 335px;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
  margin-top: 0;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    width: 473px;
  }
`;

export const ButtonRegistered = styled(NavLink)`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: white;
  text-decoration: none;
  margin-bottom: 14px;

  width: 335px;
  padding: 14px 0px;
  border: none;
  border-radius: 8px;
  background: #161616;
`;

export const ButtonLogIn = styled(NavLink)`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  text-decoration: none;
  color: black;

  background: transparent;
  border: none;
`;
