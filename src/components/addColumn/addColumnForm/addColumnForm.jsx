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
import { addColumn} from 'redux/dashboards/operations';

const initialValues = {
  title: '',
};

export const AddColumnForm = ({ id, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // const formData = new FormData();
    // formData.append('parentBoard', id);
    // formData.append('title', values.title);

    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    // dispatch(addColumn(formData));
    actions.resetForm();
    dispatch(
      addColumn({
        parentBoard: id,
        ...values,
      })
    );
    console.log({
      parentBoard: id,
      ...values,
    });
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

      <Title>Add column</Title>
      <Formik
        initialValues={initialValues}
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
