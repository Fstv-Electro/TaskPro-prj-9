import React from 'react';
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
import { useDispatch } from 'react-redux';
import { editColumn } from 'redux/dashboards/operations';

export const EditColumnForm = ({ item, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // const formData = new FormData();
    // formData.append('title', values.title);

    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    // // dispatch(addColumn(formData));
    console.log(values);
    actions.resetForm();
    dispatch(editColumn(values));

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

      <Title>Edit column</Title>
      <Formik
        initialValues={{ id: item._id, title: item ? item.title : '' }}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <Form autoComplete="off">
          <FormField htmlFor="title">
            <Field type="text" name="title" placeholder="Title" />
            <ErrorMessage name="title" component="span" />
          </FormField>
          <SubmitButton
            title="Add"
            type="submit"
            height="49"
            theme="Dark"
            icon={true}
          />
        </Form>
      </Formik>
    </Modal>
  );
};
