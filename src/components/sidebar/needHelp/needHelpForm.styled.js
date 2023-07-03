import styled from '@emotion/styled';
import { Field as FormicField, Form as FormicForm } from 'formik';

export const Title = styled.h2`
    margin: 0 0 24px 0;
    font-size: 18px;
    font-weight: 500;
`;

export const Form = styled(FormicForm)`
    display: flex;
    flex-direction: column;
    gap: 14px;
`

export const Field = styled(FormicField)`
    max-width: 100%;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 18px;
    border-radius: 8px;
    border: 1px solid var(--button-bg-color);
    opacity: 0.4000000059604645;
    color: var(--first-text-color);
    background-color: transparent; 
`;

export const Textarea = styled(FormicField)`
    max-width: 100%;
    height: 120px;
    margin-bottom: 40px;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 18px;
    border-radius: 8px;
    border: 1px solid var(--bu-bg-color);
    opacity: 0.4000000059604645;
    color: var(--first-text-color);
    background-color: transparent;
     
`;