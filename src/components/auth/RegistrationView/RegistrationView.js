import { Formik, ErrorMessage } from 'formik';
import {
  Container,
  UserForm,
  Registered,
  Login,
  Nav,
  Form,
  Field,
  FormFields,
  Button,
  FormIcon,
  Icon,
  Eye,
} from './RegistrationView.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Sprite from '../../../images/symbol-defs.svg';
import * as Yup from 'yup';

const NewUserSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      excludeEmptyString: true,
    })
    .required('Required'),
  email: Yup.string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      {
        message: 'Email error',
        excludeEmptyString: true,
      }
    )
    .required('Required'),
  password: Yup.string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, {
      message: 'Password error',
      excludeEmptyString: true,
    })
    .required('Required'),
});

export default function RegistrationView() {
  const dispatch = useDispatch();
  const [type, setType] = useState('password');

  function handleSubmit(value) {
    const { name, email, password } = value;
    dispatch(register({ name, email, password }));
  }

  function handleClick() {
    setType('text');
    switch (type) {
      case 'text':
        return setType('password');
      case 'password':
        return setType('text');

      default:
        break;
    }
  }

  return (
    <Container>
      <UserForm>
        <Nav>
          <Registered to="/register">Registration</Registered>
          <Login to="/login">Log In</Login>
        </Nav>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={NewUserSchema}
          onSubmit={(value, { resetForm }) => {
            handleSubmit(value);
            resetForm();
          }}
        >
          <Form>
            <FormFields>
              <Field type="text" name="name" placeholder="Enter your name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{
                  color: 'white',
                }}
              />
              <Field type="email" name="email" placeholder="Enter your email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{
                  color: 'white',
                }}
              />
              <FormIcon>
                <Field
                  type={type}
                  name="password"
                  placeholder="Create a password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{
                    color: 'white',
                  }}
                />
                <Eye type="button" onClick={handleClick}>
                  <Icon aria-label="Logo">
                    <use href={Sprite + '#icon-eye'}></use>
                  </Icon>
                </Eye>
              </FormIcon>
            </FormFields>
            <Button type="submit">Register Now </Button>
          </Form>
        </Formik>
      </UserForm>
    </Container>
  );
}
