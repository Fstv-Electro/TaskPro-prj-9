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
} from './RegistrationView.styled';

export default function RegistrationView() {
  return (
    <Container>
      <UserForm>
        <Nav>
          <Registered to="/register">Registration</Registered>
          <Login to="/login">Log In</Login>
        </Nav>
        <Formik>
          <Form>
            <FormFields>
              <Field type="text" name="name" placeholder="Enter your name" />
              <Field type="email" name="email" placeholder="Enter your email" />
              <Field type="text" name="name" placeholder="Create a password" />
            </FormFields>
            <Button type="submit">Register Now</Button>
          </Form>
        </Formik>
      </UserForm>
    </Container>
  );
}
