import styled from '@emotion/styled';
import { Field as FormicField } from 'formik';

export const Container = styled.div`
  width: 250px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  margin-bottom: 14px;
`;

export const BackgroundWrapper = styled.div`
  padding-top: 14px;
  height: 123px;
  margin-bottom: 24px;
  border-top: 1px solid #ffffff1a;
  border-bottom: 1px solid #ffffff1a;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;

  margin: 0px;
`;

export const Button = styled.button`
  color: var(--last-text-color);
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.24px;
  text-decoration-line: underline;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  /* align-items: baseline; */
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 8px;
  cursor: pointer;
  color: var(--last-text-color);
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.24px;
`;

export const Field = styled(FormicField)`
  width: 14px;
  height: 14px;
  background-color: transparent;

  display: grid;
  place-content: center;

  ::after {
    content: '';
    left: 6.4%;
    position: absolute;
    transform: translate(6px, 1px);
    width: 12px;
    height: 12px;
    border: 2.5px solid black;
    border-radius: 50%;
    opacity: 0;
  }
  ::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 50%;
    transition: 120ms transform ease-in-out;
    background-color: ${props => props.color};
  }

  :checked::after {
    opacity: 1;
  }
`;
