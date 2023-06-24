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
} from './LiginView.styled';

export default function LoginView() {
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
              <Field type="email" name="email" placeholder="Enter your email" />
              <Field type="text" name="name" placeholder="Confirm a password" />
            </FormFields>
            <Button type="submit">Log In Now</Button>
          </Form>
        </Formik>
      </UserForm>
    </Container>
  );
}
