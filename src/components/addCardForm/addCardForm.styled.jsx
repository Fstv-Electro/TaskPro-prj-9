import styled from '@emotion/styled';
import { Field } from "formik";

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
    width: 296px;
    height: 45px;
    margin-top: 24px;
    background: transparent;
    border-radius: 8px;
    border: 1px solid var(--button-bg-color);
    color: currentColor;
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
`;
export const InputDescription = styled(Field)`
    width: 296px;
    height: 150px;
    margin-top: 14px;
    background: transparent;
    border-radius: 8px;
    border: 1px solid var(--button-bg-color);
    flex-shrink: 0;
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
    color: currentColor;
`;

export const TitleStatus = styled.div`
    margin-top: 24px;
    margin-bottom: 4px;
    color: rgba(255, 255, 255, 0.50);
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
`   

export const RadioBtn = styled(Field)`
    width: 14px;
    height: 14px;
    margin: 0;
    border-radius: 50%;
    opacity: 0;
    &:checked + div:before {
        content: "";
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
    &:checked+div:after{
        content: "";
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

export const ColorStatus = styled.div(props =>
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
)

export const TitleDeadline = styled.p`
    margin-top: 14px;
    color: rgba(255, 255, 255, 0.50);
    font-size: 12px;
    letter-spacing: -0.24px;
`;

export const CalendarShow = styled.div`
    display: flex;
    align-items: center;
    color: #BEDBB0;
    font-size: 14px
    font-weight: 500;
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
    border-radius: 8%;
    background: #BEDBB0;
    color: #161616;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
    cursor: pointer;
`
export const IconPlus = styled.svg`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin-right: 8px;
  fill: #000000;
  color: #ffffff;
`;