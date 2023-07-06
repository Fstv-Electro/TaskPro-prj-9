import React from 'react';
import { Formik } from 'formik';
import { Modal } from '../../modal/modal';
import { ButtonClose } from 'components/modalBtnClose/ButtonClose';
import * as yup from 'yup'
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
    actions.resetForm();
    dispatch(
      addColumn({
        parentBoard: id,
        ...values,
      })
    );
    onClose();
  };

const validateSchema = yup.object().shape({
  title: yup.string().required(),
});

  return (
    <Modal onClose={onClose}>
      <ButtonClose onClose={onClose} />

      <Title>Add column</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validateSchema}
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
