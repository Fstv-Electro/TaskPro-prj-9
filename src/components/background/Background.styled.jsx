import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-bottom: 40px;
`;

export const List = styled.ul`
  display: flex;
  gap: 4px;
  width: 280px;
  flex-wrap: wrap;
  border: none;
  padding: 0;
`;

export const FormQuestion = styled.legend`
  color: #fff;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const Item = styled.li`
  display: inline-block;

  vertical-align: top;
  text-align: center;
  width: 28px;
  height: 28px;
`;

export const Label = styled.label`
  display: block;

  width: 28px;
  height: 28px;

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
    border: 1px solid #fff;
    border-radius: 5%;
  }
  &[type='radio']:checked ~ label {
    opacity: 1;
    border: 1px solid #fff;
    border-radius: 5%;
  }
`;

export const Img = styled.img`
  width: 28px;
  height: 28px;
  padding-bottom: 2px;
  margin: 0;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :active {
    border: 1px solid #fff;
    border-radius: 5%;
  }
`;
