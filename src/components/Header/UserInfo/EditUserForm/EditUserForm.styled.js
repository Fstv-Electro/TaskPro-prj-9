import styled from '@emotion/styled';
import { Field as FormicField, Form as FormicForm } from 'formik';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

export const UserForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  }
`;


export const Title = styled.h3`
  color: #fff;
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
`;

export const Field = styled(FormicField)`
  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  width: 269px;
  height: 49px;
  padding-left: 18px;
  background-color: transparent;
  color: white;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4000000059604645;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  @media screen and (min-width: 768px) {
    width: 326px;
    height: 49px;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.28px;

  width: 287px;
  height: 49px;
  background-color: #bedbb0;
  border: none;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 344px;
    height: 49px;
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
`;

export const Label = styled.label`
    width: 68px;
    height: 79px;
    margin: 25px auto 0 auto;
    cursor: pointer;
`
export const FieldAvatar = styled.input`
    display: none;
`
export const ImgWrapper = styled.div`
    position: relative;
    width: 68px;
    height: 68px;
`
export const Img = styled.img`
    width: 100%;
		height: 100%;
		object-fit: cover;
    border-radius: 8px;
`
export const IconPlus = styled.svg`
  position: absolute;
  top: 98%;
  left: 50%;
  transform:translate(-50%, -50%);
  width: 24px;
  height: 24px;
  fill: ${props => props.fill};
  color: ${props => props.color};
`;