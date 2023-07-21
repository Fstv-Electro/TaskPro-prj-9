import styled from '@emotion/styled';
import {
  Field as FormicField,
  Form as FormicForm,
  ErrorMessage as FormicErrorMessage,
} from 'formik';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 352px;

  @media (max-width: 768px) {
    width: 287px;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const UserForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
`;

export const FormFields = styled.div`
  position: relative;
  display: flex;
  gap: 14px;
  flex-direction: column;
  width: 100%;
`;

export const Field = styled(FormicField)`
  font-size: 14px;
  letter-spacing: -0.28px;
  width: 100%;
  height: 49px;
  padding-left: 18px;
  color: currentColor;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid var(--button-bg-color);
  outline: none;
  opacity: 0.4000000059604645;

  &:focus {
    opacity: 1;
  }
`;

export const ErrorMessage = styled(FormicErrorMessage)`
  position: absolute;
  top: 51px;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;

  padding: 14px;
  width: 100%;
  height: 49px;

  background-color: var(--button-bg-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: var(--color-icon-plus);

  &:active:not(:disabled) {
    position: relative;
    top: 1px;
    box-shadow: -4px -4px 43px 2px rgba(34, 60, 80, 0.2) inset;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin: 0;
  margin-bottom: 18px;
`;

export const Form = styled(FormicForm)`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

