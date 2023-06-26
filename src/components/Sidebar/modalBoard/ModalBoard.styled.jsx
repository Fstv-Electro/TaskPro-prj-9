import styled from '@emotion/styled';
import { HiSearch } from 'react-icons/hi';
import { Form, Field } from 'formik';

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 400px; */
  /* background-color: #fff; */
  /* border-radius: 3px; */
  /* overflow: hidden; */
`;

export const Input = styled(Field)`
  /* padding: 8px 32px 8px 8px; */
  /* border-radius: 4px;
  outline: none;
  font: inherit; */
  /* width: 800px; */
`;

export const Label = styled.label`
  /* display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 250px; */
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 12px;
  letter-spacing: 0.03em;
  margin-bottom: 10px;
`;
