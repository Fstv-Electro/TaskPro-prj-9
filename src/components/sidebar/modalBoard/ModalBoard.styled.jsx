import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Input = styled(Field)`
  display: flex;
  width: 280px;
  padding: 14px 1px 14px 18px;
  /* margin: 0 24px 0 24px; */
  align-items: center;
  background: transparent;
  outline: none;
  border-radius: 8px;
  border: 1px solid var(--button-bg-color);
  opacity: 0.4000000059604645;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  color: currentColor;

  &:focus {
    opacity: 1;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  /* width: 250px; */
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 12px;
  letter-spacing: 0.03em;
  margin-bottom: 10px;
`;

export const FormTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-bottom: 24px;
`;

export const DeleteTitle = styled.h2`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-top: 14px;
  margin-bottom: 24px;
`;

export const WrapperDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 250px;
  transform: scale(1);
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Btn = styled.button`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;
  padding: 5px;
  background-color: var(--button-bg-color);
  border: none;
  border-radius: 8%;
  color: #161616;
  cursor: pointer;
  width: 100px;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const BgWrapper = styled.div`
  padding-bottom: 50px;
`;
