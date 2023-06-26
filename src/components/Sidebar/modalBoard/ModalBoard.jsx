import { useState } from 'react';
import { Wrapper, Forma, Label, Text } from './ModalBoard.styled';
import SubmitButton from '../../submitButton/submitButton';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
});

export const ModalBoard = () => {
  const [name, setName] = useState('');

  const handleSubmit = (query, { resetForm }) => {
    if (!query) {
      console.log('error');
    } else {
      console.log(query.name);
      resetForm();
    }
  };

  const initialValues = {
    name: '',
  };

  return (
    <>
      <h2>New board</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Forma>
          <Label htmlFor="name">
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
          </Label>

          <SubmitButton
            title="Create"
            width="334"
            height="56"
            theme="Dark"
            icon={true}
            addColumn={true}
          />
        </Forma>
      </Formik>
    </>
  );
};
