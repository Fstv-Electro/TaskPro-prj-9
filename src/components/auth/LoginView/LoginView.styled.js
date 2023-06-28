import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Field as FormicField, Form as FormicForm } from 'formik';

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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
`;

export const UserForm = styled.div`
  display: flex;
  flex-direction: column;

  width: 287px;
  padding: 24px;
  border-radius: 8px;
  background: #151515;

  @media screen and (min-width: 768px) {
    width: 344px;
    padding: 40px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const Registered = styled(NavLink)`
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.36px;
  text-decoration: none;
`;

export const Login = styled(NavLink)`
  color: white;
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.36px;
  text-decoration: none;
`;

export const Form = styled(FormicForm)`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormFields = styled.label`
  display: flex;
  gap: 14px;
  flex-direction: column;
`;

export const Field = styled(FormicField)`
  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  width: 269px;
  height: 49px;
  padding-left: 18px;
  background-color: transparent;
  color: white;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4000000059604645;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  @media screen and (min-width: 768px) {
    width: 326px;
    height: 49px;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.28px;

  width: 287px;
  height: 49px;
  background-color: #bedbb0;
  border: none;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 344px;
    height: 49px;
  }
`;

export const FormIcon = styled.span`
  position: relative;
  display: block;
`;

export const Eye = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  padding-top: 5px;

  background-color: transparent;
  border: none;
  opacity: 0.4000000059604645;
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
`;
