import { useState } from 'react';
import { Forma, Label, Input, FormTitle } from './ModalBoard.styled';
import SubmitButton from '../../submitButton/submitButton';
import { IconRadioButtons } from '../../iconRadioButtons/IconRadioButtons';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ButtonClose } from '../../modalBtnClose/ButtonClose';

const schema = yup.object().shape({
  name: yup.string().required(),
});

export const ModalBoard = ({ onClose }) => {
  const [name, setName] = useState('');

  const handleSubmit = (query, { resetForm }) => {
    if (!query) {
      console.log('error');
    } else {
      setName(query.name);
      console.log(name);
      resetForm();
    }
    onClose();
  };

  const initialValues = {
    name: '',
  };

  return (
    <>
      <ButtonClose onClose={onClose} />
      <FormTitle>New board</FormTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Forma>
          <Label htmlFor="name">
            <Input
              type="text"
              name="name"
              placeholder="Title"
              required
              minlength="4"
              maxlength="12"
            />
            <ErrorMessage name="name" component="div" />
          </Label>

          <SubmitButton
            title="Create"
            width="302"
            height="49"
            theme="Dark"
            icon={true}
            addColumn={false}
          />
        </Forma>
      </Formik>
      <IconRadioButtons />
    </>
  );
};
