import styled from '@emotion/styled';
import { Field } from 'formik';

export const Container = styled.div`
  position: relative;
  width: 302px;
  height: 522px;
  /* padding: 24px; */
  border-radius: 8px;
`;

export const TitleForm = styled.h1`
  display: inline;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

export const InputTitle = styled(Field)`
  display: flex;
  width: 302px;
  height: 49px;
  margin-top: 24px;
  background: transparent;
  padding: 14px 18px;

  border-radius: 8px;
  border: 1px solid var(--button-bg-color);
  color: currentColor;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  opacity: 0.4;
  outline: none;

  &:focus {
    opacity: 1;
  }
`;
export const InputDescription = styled(Field)`
  width: 302px;
  height: 154px;
  margin-top: 14px;
  background: transparent;
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid var(--button-bg-color);
  flex-shrink: 0;
  resize: none;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  color: currentColor;
  outline: none;
  opacity: 0.4;

  &:focus {
    opacity: 1;
  }
`;

export const TitleStatus = styled.div`
  margin-top: 24px;
  margin-bottom: 4px;
  color: var(--last-text-color);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const BlockStatus = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
`;

export const RadioBtn = styled(Field)`
  width: 14px;
  height: 14px;
  margin: 0;
  border-radius: 50%;
  opacity: 0;
  &:checked + div:before {
    content: '';
    position: absolute;
    display: block;
    background: var(--color);
    z-index: 2;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    left: 3px;
    top: 3px;
  }
  &:checked + div:after {
    content: '';
    border: 1px solid var(--color);
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: #000000;
  }
`;

export const ColorStatus = styled.div(
  props =>
    `
        position: absolute;
        top: 0;
        display: flex;
        gap: 8px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        cursor: pointer;
        background-color: ${props.color};
    `
);

export const TitleDeadline = styled.p`
  margin-top: 14px;
  color: var(--last-text-color);
  font-size: 12px;
  letter-spacing: -0.24px;
`;

export const CalendarShow = styled.div`
  display: flex;
  align-items: center;
  color: var(--button-bg-color);
  font-size: 14px;
  font-weight: 500;
  margin-top: 4px;
  letter-spacing: -0.28px;
`;
export const SubmitButton = styled.button`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 302px;
  height: 49px;
  border-radius: 8px;
  border: none;
  background: var(--button-bg-color);
  color: var(--color-icon-plus);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  cursor: pointer;
`;
export const IconPlus = styled.svg`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin-right: 8px;

  --color1: var(--color-icon-plus);
  --color2: var(--stroke--plus-icon);
`;
