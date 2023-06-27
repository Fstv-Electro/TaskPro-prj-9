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
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/operations';
import Sprite from '../../../images/symbol-defs.svg';
import * as Yup from 'yup';

const UserSchema = Yup.object().shape({
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

export default function LoginView() {
  const dispatch = useDispatch();
  const [type, setType] = useState('password');

  function handleSubmit(value) {
    const { email, password } = value;
    dispatch(logIn({ email, password }));
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
