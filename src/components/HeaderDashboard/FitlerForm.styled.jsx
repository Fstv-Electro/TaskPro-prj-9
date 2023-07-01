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

export const BackgroundWrapper = styled.div`
  padding-top: 2px;
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
  cursor: pointer;
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

  ////////////////////////
  /* ::after {
    content: '';
    left: 6.4%;
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid red;
    border-radius: 50%;
  } */

  /* ::before {
    content: '';
    left: 6.4%;
    transform: translateX(2.9px);
    position: absolute;
    width: 11px;
    height: 11px;
    background-color: green;
    border-radius: 50%;
    opacity: 0;
  } */
`;

export const Field = styled(FormicField)`
  width: 14px;
  height: 14px;

  display: grid;
  place-content: center;

  ::after {
    content: '';
    left: 6.4%;
    position: absolute;
    transform: translate(3px, 1px);
    width: 8px;
    height: 8px;
    border: 2px solid black;
    border-radius: 50%;
    opacity: 0;
  }
  ::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 50%;
    transition: 120ms transform ease-in-out;
    background-color: #8fa1d0;
  }

  :checked::after {
    opacity: 1;
  }
`;
