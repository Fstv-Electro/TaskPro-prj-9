import { Formik } from 'formik';
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

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  }

  function handleSubmit() {
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  }

  return (
    <Container>
      <UserForm>
        <Nav>
          <Registered to="/register">Registration</Registered>
          <Login to="/login">Log In</Login>
        </Nav>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
        >
          <Form>
            <FormFields>
              <Field
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              <FormIcon>
                <Field
                  type="text"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Confirm a password"
                />
                <Eye>
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
