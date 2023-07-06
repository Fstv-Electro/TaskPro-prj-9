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
  GoogleBtn,
  GoogleIcon,
  BtnPosition,
} from './RegistrationView.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, registerGoogle } from 'redux/auth/operations';
import Sprite from '../../../images/symbol-defs.svg';
import * as Yup from 'yup';
import { selectIsError } from 'redux/auth/selectores';
import Notiflix from 'notiflix';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const NewUserSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z0-9]{2,32}$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      excludeEmptyString: true,
    })
    .required('Required'),
  email: Yup.string()
    .matches(/^(?=.*@[^@]*$)(?=.*\.[^.]*$)[A-Za-z0-9@.]+$/, {
      message: 'Email error',
      excludeEmptyString: true,
    })
    .required('Required'),
  password: Yup.string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()-=_+{}[\]|\\;:'",.<>/?]{8,64}$/, {
      message: 'Password must contain Latin letters and numbers, without spaces in different case, from 8 to 64 characters.',
      excludeEmptyString: true,
    })
    .required('Required'),
});

Notiflix.Notify.init({
  position: 'right-bottom',
});

export default function RegistrationView() {
  const dispatch = useDispatch();
  const [type, setType] = useState('password');
  const isError = useSelector(selectIsError);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      dispatch(registerGoogle(token));
    }
  }, [dispatch, searchParams]);

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

  if (isError) {
    Notiflix.Notify.warning('Email in use');
  }

  return (
    <Container>
      <UserForm>
        <Nav>
          <Registered to="/auth/register">Registration</Registered>
          <Login to="/auth/login">Log In</Login>
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
                  color: 'red',
                  fontSize: 14,
                }}
              />
              <Field type="email" name="email" placeholder="Enter your email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{
                  color: 'red',
                  fontSize: 14,
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
                    color: 'red',
                    fontSize: 14,
                  }}
                />
                <Eye type="button" onClick={handleClick}>
                  <Icon aria-label="Logo">
                    <use href={Sprite + '#icon-eye'}></use>
                  </Icon>
                </Eye>
              </FormIcon>
            </FormFields>
            <BtnPosition>
              <Button type="submit">Register Now </Button>
              <GoogleBtn href="https://task-pro-backend.onrender.com/users/google">
                <GoogleIcon aria-label="Google">
                  <use href={Sprite + '#icon-google'}></use>
                </GoogleIcon>
              </GoogleBtn>
            </BtnPosition>
          </Form>
        </Formik>
      </UserForm>
    </Container>
  );
}
