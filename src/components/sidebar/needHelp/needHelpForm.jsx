
import SubmitButton from "../../submitButton/submitButton";
import { Formik, ErrorMessage } from 'formik';
import { Title, Field, Form, Textarea } from './needHelpForm.styled';
import { ButtonClose } from 'components/modalBtnClose/ButtonClose';
import * as Yup from 'yup';

const helpSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      {
        message: 'Email error',
        excludeEmptyString: true,
      }
    )
    .required('Required'),
  text: Yup.string()
    .required('Required'),
});

export const NeedHelpForm = ({onClose}) => {

    function handleSubmit(value) {
        console.log(value);
        // const { name, email, password } = value;
        onClose()
      }

    return (
        <>
        <ButtonClose onClose={onClose} />
        <Title>Need Help</Title>
        <Formik
        initialValues={{ email: '', text: '' }}
          validationSchema={helpSchema}
          onSubmit={(value, { resetForm }) => {
            handleSubmit(value);
            resetForm();
          }}>
            <Form>
            <Field type="email" name="email" placeholder="Enter your email" />
            <ErrorMessage
                name="email"
                component="div"
                style={{
                  color: 'white',
                }}
              />
              <Textarea type="text" name="text" placeholder="Enter your comment" component="textarea" />
              <ErrorMessage
                name="text"
                component="div"
                style={{
                  color: 'white',
                }}
              />
              <SubmitButton title="Send" width="352" height="49" theme="Dark"/>
            </Form>
        </Formik>
        </>
    )

}