import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Modal } from '../../modal/modal';
import { ButtonClose } from 'components/modalBtnClose/ButtonClose';
import {
  Form,
  FormField,
  Field,
  ErrorMessage,
  Title,
} from './addColumnForm.styled';
import SubmitButton from '../../submitButton/submitButton';
// import { useDispatch } from 'react-redux';
// import { addColumn } from 'redux/contacts/operationsContacts';

export const EditColumnForm = ({ item, onClose }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const widthButton = () => {
    let a;
    console.log('Ширина вікна:', windowWidth);

    if (windowWidth > 767) {
      a = '302';
      console.log(a);
    } else {
      a = '287';
      console.log(a);
    }

    return a;
  };

  const handleSubmit = (values, actions) => {
    const formData = new FormData();
    formData.append('title', values.title);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    // dispatch(addColumn(formData));
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
      <ButtonClose onClose={onClose} />
      <Formik
        initialValues={{ title: item ? item.title : '' }}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <Form autoComplete="off">
          <FormField htmlFor="title">
            <Title htmlFor="title">Edit column</Title>
            <Field type="text" name="title" placeholder="Title" />
            <ErrorMessage name="title" component="span" />
          </FormField>
          <SubmitButton
            title="Add"
            type="submit"
            width={widthButton()}
            height="49"
            theme="Dark"
            icon={true}
          />
        </Form>
      </Formik>
    </Modal>
  );
};
