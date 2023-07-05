import styled from '@emotion/styled';
import { Field as FormicField } from 'formik';

export const Container = styled.div`
`;

export const Title = styled.h2`
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  margin-top: 0;
  padding-bottom: 14px;
`;

export const BackgroundWrapper = styled.div`
  padding-top: 14px;
  padding-bottom: 14px;
  border-top: 1px solid var(--main-line-color);
  border-bottom: 1px solid var(--main-line-color);
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 24px;
  padding-bottom: 14px;
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
  gap: 12px;
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: var(--last-text-color);
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.24px;
  padding-top: 1px;
  padding-bottom: 1px;
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
    transform: translate(3px, 1px);
    width: 15px;
    height: 15px;
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
    background-color: ${props => props.color};
  }

  :checked::after {
    opacity: 1;
  }
`;
