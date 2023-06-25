import React from 'react';
import { Formik } from 'formik';
import sprite from '../../../images/symbol-defs.svg';
import { Modal } from '../../modal/modal';
import { ButtonClose } from 'components/modalBtnClose/ButtonClose';
import {
  Form,
  FormField,
  Field,
  ErrorMessage,
  SubmitBtn,
  IconPlus,
  Title,
} from './addColumnForm.styled';

const initialValues = {
  title: '',
};

export const AddColumnForm = ({ onClose }) => {
  const handleSubmit = (values, actions) => {
    // const requestData = {
    //   title: values.title,
    // };
    // fetch('/api/your-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(requestData),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Обробка відповіді з сервера
    //     console.log(data);
    //     actions.resetForm();
    //     onClose();
    //   })
    //   .catch(error => {
    //     // Обробка помилок
    //     console.error(error);
    //   });

    console.log('Form data:', values);
    actions.resetForm();

    onClose();
  };

  const validateForm = values => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Field must not be empty';
    }

    return errors;
  };

  return (
    <Modal onClose={onClose}>
      <ButtonClose onClose={onClose}/>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <Form autoComplete="off">
          <FormField htmlFor="title">
            <Title htmlFor="title">Add column</Title>
            <Field type="text" name="title" placeholder="Title" />
            <ErrorMessage name="title" component="span" />
          </FormField>
          <SubmitBtn type="submit">
            <IconPlus aria-label="add">
              <use href={sprite + '#icon-plus-add'}></use>
            </IconPlus>
            <span className="text">Add</span>
          </SubmitBtn>
        </Form>
      </Formik>
    </Modal>
  );
};
