import styled from '@emotion/styled';

export const Form = styled.div`
  margin-bottom: 24px;
`;

export const FormOptions = styled.ul`
  border: none;
  padding: 0;
  margin: 0;
`;

export const FormQuestion = styled.legend`
  color: #fff;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const FormAnswer = styled.li`
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  height: 100%;
  width: 100%;
  padding-right: 6px;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.5s ease-in-out;
`;

export const Input = styled.input`
  &[type='radio'] {
    opacity: 0;
    width: 0;
    height: 0;
  }
  &[type='radio']:active ~ label {
    opacity: 1;
  }
  &[type='radio']:checked ~ label {
    opacity: 1;
  }
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
  stroke: #fff;
  :hover {
    stroke: #bedbb0;
  }
`;
