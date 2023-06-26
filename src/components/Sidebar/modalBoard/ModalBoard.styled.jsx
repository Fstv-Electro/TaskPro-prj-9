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
  display: flex;
  width: 302px;
  padding: 14px 256px 14px 18px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4000000059604645;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
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
