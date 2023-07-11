import { useDispatch } from "react-redux";
import { needHelp } from "redux/dashboards/operations";
import SubmitButton from "../../submitButton/submitButton";
import { Formik, ErrorMessage } from 'formik';
import { Title, Field, Form, Textarea } from './needHelpForm.styled';
import { ButtonClose } from 'components/modalBtnClose/ButtonClose';
import * as Yup from 'yup';
import Notiflix from "notiflix";

const helpSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      {
        message: 'Invalid Email',
        excludeEmptyString: true,
      }
    )
    .required('Please, enter your email'),
  text: Yup.string()
    .required('Please, enter your comment'),
});

export const NeedHelpForm = ({onClose}) => {
    const dispatch = useDispatch();

    function handleSubmit(value) {
        const { email, text } = value;
      dispatch(needHelp({ email, text }))
      Notiflix.Notify.info('Thank you for your request, we will answer you as soon as possible.')
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
                  color: 'red',
                  fontSize: 14,
                }}
              />
              <Textarea type="text" name="text" placeholder="Enter your comment" component="textarea" />
              <ErrorMessage
                name="text"
                component="div"
                style={{
                  color: 'red',
                  fontSize: 14,
                }}
              />
              <SubmitButton title="Send" width="352" height="49" theme="Dark"/>
            </Form>
        </Formik>
        </>
    )

}