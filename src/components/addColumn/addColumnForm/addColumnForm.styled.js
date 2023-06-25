import styled from '@emotion/styled';

import {
  Form as FormicForm,
  Field as FormicField,
  ErrorMessage as FormicError,
} from 'formik';

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  text-align: start;
  font-size: 20px;
`;

export const Form = styled(FormicForm)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 302px;
`;

export const Title = styled.label`
  margin-bottom: 24px;

  color: #fff;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

export const Field = styled(FormicField)`
  height: 47px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  border: 1px solid rgba(190, 219, 176, 0.5);
  border-color: rgba(190, 219, 176, 0.5);
  border-radius: 8px;

  color: #fff;
  font-size: 14px;
  font-family: Poppins;
  letter-spacing: -0.28px;
  &:focus {
    outline-color: #bedbb0;
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  width: 302px;
  padding: 10px 0px 11px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #bedbb0;
  color: #161616;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(0.97);
  }

  &:focus {
    transform: scale(1.03);
  }
`;

export const IconPlus = styled.svg`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin-right: 8px;
  fill: #121212;
  color: #ffffff;
`;

export const ErrorMessage = styled(FormicError)`
  color: tomato;
  font-size: 12px;
`;
