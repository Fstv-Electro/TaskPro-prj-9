import React from 'react';
import { Formik } from 'formik';

const initialValues = {
  title: '',
};

export const AddColumnForm = ({ onClose }) => {
  const handleSubmit = (values, actions) => {
    // const nameExists = contacts.find(contact =>
    //   contact.name.toLowerCase().includes(values.name.toLowerCase())
    // );

    // if (nameExists) {
    //   return alert(`${values.name} is already in contacts!`);
    // }
    // actions.resetForm();
    // dispatch(
    //   addContact({
    //     ...values,
    //   })
    // );
    onClose();
  };

  return (
    <div onClose={onClose}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <FormField htmlFor="title">
            Add column
            <Field type="text" name="title" placeholder="Title" />
            <ErrorMessage name="name" component="span" />
          </FormField>
          <SubmitBtn type="submit">
            <span className="text">Add</span>
          </SubmitBtn>
        </Form>
      </Formik>
    </div>
  );
};
