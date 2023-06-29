import styled from '@emotion/styled';
import { Field as FormicField } from 'formik';

export const Container = styled.div`
  width: 300px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;

  margin-top: 0;
`;

export const TESTbackgroundAvatars = styled.div`
  height: 109px;
  padding-top: 14px;
  margin-bottom: 24px;
  border-top: 1px solid #ffffff1a;
  border-bottom: 1px solid #ffffff1a;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 14px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;

  margin: 0px;
`;

export const Button = styled.button`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.24px;
  text-decoration-line: underline;

  background-color: transparent;
  border: none;
`;

export const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.24px;
`;

export const Field = styled(FormicField)`
  width: 14px;
  height: 14px;

  display: grid;
  place-content: center;

  ::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    background-color: #e09cb5;
    opacity: 0;
  }

  :checked::before {
    opacity: 1;
  }
`;
