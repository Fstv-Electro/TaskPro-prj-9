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
} from './RegistrationView.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Sprite from '../../../images/symbol-defs.svg';

// import * as Yup from 'yup';

// const NewUserSchema = Yup.object().shape({
//   name: Yup.string().matches(
//     /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//     {
//       message:
//         "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
//       excludeEmptyString: true,
//     }
//   ),
//   // .required('Required'),
//   email: Yup.string().matches(
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//     {
//       message: 'Email error',
//       excludeEmptyString: true,
//     }
//   ),
//   // .required('Required'),
//   password: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, {
//     message: 'Password error',
//     excludeEmptyString: true,
//   }),
//   // .required('Required'),
// });

export default function RegistrationView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  }

  function handleSubmit() {
    dispatch(register({ name, email, password }));
    setName('');
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
          initialValues={{ name: '', email: '', password: '' }}
          // validationSchema={NewUserSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <FormFields>
              <Field
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
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
                  placeholder="Create a password"
                />
                <Eye>
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
