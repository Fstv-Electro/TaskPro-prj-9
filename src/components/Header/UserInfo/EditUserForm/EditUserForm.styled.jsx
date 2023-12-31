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

export const ErrorMessage = styled(FormicErrorMessage)``;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin: 0;
`;

export const Form = styled(FormicForm)`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormFields = styled.div`
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

export const FormIcon = styled.span`
  position: relative;
  display: block;
`;

export const Eye = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);

  background-color: transparent;
  border: none;
  opacity: 0.4000000059604645;
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  --color1: var(--first-text-color);
`;

export const Label = styled.label`
  width: 68px;
  height: 79px;
  margin: 25px auto 0 auto;
  cursor: pointer;
`;
export const FieldAvatar = styled.input`
  display: none;
`;
export const ImgWrapper = styled.div`
  position: relative;
  width: 68px;
  height: 68px;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 0px 11px 0px var(--button-bg-color);
    transform: scale(1.1);
  }

  &:hover svg {
    top: 50%;
    box-shadow: 0px 0px 11px 0px var(--button-bg-color);
  }
`;
export const IconAvatar = styled.svg`
  --color1: var(--main-bg-color);
  --color2: var(--heder-bg-color);
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
export const IconPlus = styled.svg`
  position: absolute;
  top: 98%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 550ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 24px;
  height: 24px;

  --color1: var(--fill-icon-plus);
  --color2: rgba(22, 22, 22, 1);
`;
