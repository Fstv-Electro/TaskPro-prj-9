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
} from './LoginView.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/operations';
import Sprite from '../../../images/symbol-defs.svg';
import * as Yup from 'yup';
import { selectIsError } from 'redux/auth/selectores';
import Notiflix from 'notiflix';

const UserSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^(?=.*@[^@]*$)(?=.*\.[^.]*$)[A-Za-z0-9@.]+$/, {
      message: 'Email error',
      excludeEmptyString: true,
    })
    .required('Required'),
  password: Yup.string()
    .matches(/^(?=.*[a-zA-Z0-9])(?!.*\s).{8,64}$/, {
      message: 'Password error',
      excludeEmptyString: true,
    })
    .required('Required'),
});

Notiflix.Notify.init({
  position: 'right-bottom',
});

export default function LoginView() {
  const dispatch = useDispatch();
  const [type, setType] = useState('password');
  const isError = useSelector(selectIsError);

  async function handleSubmit(value) {
    const { email, password } = value;
    await dispatch(logIn({ email, password }));
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
    Notiflix.Notify.warning('Email or password is wrong');
  }

  return (
    <Container>
      <UserForm>
        <Nav>
          <Registered to="/auth/register">Registration</Registered>
          <Login to="/auth/login">Log In</Login>
        </Nav>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={UserSchema}
          onSubmit={(value, { resetForm }) => {
            handleSubmit(value);
            resetForm();
          }}
        >
          <Form>
            <FormFields>
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
                  placeholder="Confirm a password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{
                    color: 'white',
                  }}
                />
                <Eye type="button" s onClick={handleClick}>
                  <Icon aria-label="Logo">
                    <use href={Sprite + '#icon-eye'}></use>
                  </Icon>
                </Eye>
              </FormIcon>
            </FormFields>
            <Button type="submit">Log In Now</Button>
          </Form>
        </Formik>
      </UserForm>
    </Container>
  );
}
