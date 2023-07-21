import { Formik } from 'formik';
import {
  Container,
  Title,
  UserForm,
  Form,
  Field,
  ErrorMessage,
  FormFields,
  Button,
} from './AddUserForm.styled';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';

const NewUserSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      {
        message: 'Email error',
        excludeEmptyString: true,
      }
    )
    .required('Required'),
});

export const AddUserForm = ({ onClose, isLoading }) => {
  // const dispatch = useDispatch();
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (isSubmit && !isLoading) {
      onClose();
    }
  }, [onClose, isLoading, isSubmit]);

  function handleSubmit(value) {
    // dispatch(adduser(value));
    setIsSubmit(true);
  }

  return (
    <Container>
      <UserForm>
        <Title>Add user</Title>

        <Formik
          initialValues={{ email: '' }}
          validationSchema={NewUserSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}
        >
          {({ isValid }) => (
            <Form>
              <FormFields>
                <Field type="email" name="email" placeholder={'user@email.com'} />
                <ErrorMessage
                  name="email"
                  component="span"
                  style={{
                    color: 'red',
                    fontSize: 14,
                  }}
                />
                
              </FormFields>
              <Button type="submit" disabled={!isValid}>
                Send
              </Button>
            </Form>
          )}
        </Formik>
      </UserForm>
    </Container>
  );
};
