import { Formik, ErrorMessage } from 'formik';
import {
  Container,
  Title,
  UserForm,
  Form,
  Field,
  FormFields,
  FormIcon,
  Icon,
  Eye,
  ImgWrapper,
  Img,
  FieldAvatar,
  IconPlus,
  Label,
  Button,
  IconAvatar,
} from './EditUserForm.styled';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { update } from 'redux/auth/operations';
import Sprite from '../../../../images/symbol-defs.svg'
import * as Yup from 'yup';


const NewUserSchema = Yup.object().shape({
  avatar: Yup.mixed()
    .test('fileType', 'Invalid file format', (value) => {
      if (!value) return true; 
      const supportedFormats = ['image/png', 'image/jpeg', 'image/jpg'];
      return supportedFormats.includes(value.type);
    }),
  name: Yup.string()
    .matches(/^[A-Za-z0-9]{2,32}$/, {
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
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()-=_+{}[\]|\\;:'",.<>/?]{8,64}$/, {
      message: 'Password must contain Latin letters and numbers, without spaces in different case, from 8 to 64 characters.',
      excludeEmptyString: true,
    })
    .required('Required'),
});


export const  EdidUserForm = ({avatarURL, onClose, isLoading}) => {
  const dispatch = useDispatch();
  const [type, setType] = useState('password');
  const [currentImage, setCurrentImage] = useState(avatarURL);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if(isSubmit && !isLoading ) {
      onClose();
    }
    
  }, [onClose, isLoading , isSubmit]);

  function handleSubmit(value) {
    const { avatar, name, email, password  } = value;
    
    const formData = new FormData();
    if (avatar){
      formData.append('avatar', avatar);
    }
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    
    dispatch(update(formData));
    setIsSubmit(true)
  }

  function handleClick() {
    switch (type) {
      case 'text':
        return setType('password');
      case 'password':
        return setType('text');

      default:
        break;
    }
  };

  function handleFileChange(event) {
    const file = event; 
    if (!file) {
      return;
    }
    const reader = new FileReader(); 
    
    reader.onload = function (e) {
      setCurrentImage(e.target.result); 
    };
  
    reader.readAsDataURL(file);
  }

  return (
    <Container>
      <UserForm>
        <Title>Edit profile</Title>
          
        <Formik
          initialValues={{name: '', email: '', password: ''  }}
          validationSchema={NewUserSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}
        >
           {({ setFieldValue, isValid }) => (
          <Form>
            <FormFields >
              <Label htmlFor="avatar">
              <ImgWrapper >
              {currentImage ? (
                <Img src={currentImage} alt="User picture" />
                ) : (
                <IconAvatar aria-label="User picture" width="68px" height="68px">
                  <use href={Sprite + '#icon-user'}></use>
                </IconAvatar>
                )}
                <IconPlus aria-label="add" >
                  <use href={Sprite + '#icon-plus-add'}></use>
                </IconPlus>
              </ImgWrapper>
              </Label>
              <FieldAvatar 
                    id="avatar" 
                    type="file" 
                    name="avatar" 
                    onChange={(event) => {
                      setFieldValue('avatar', event.currentTarget.files[0]);
                      handleFileChange(event.currentTarget.files[0])
                    }}
              />               
              <ErrorMessage
                name="avatar"
                component="div"
                style={{
                  color: 'red',
                  fontSize: 14,
                }}
              />

              <Field type="text" name="name" placeholder="Ivetta" />
              <ErrorMessage
                name="name"
                component="div"
                style={{
                  color: 'red',
                  fontSize: 14,
                }}
              />
              <Field type="email" name="email" placeholder="ivetta34@gmail.com" />
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
                  placeholder="ivetta1999.23"
                />
                <Eye type="button" onClick={handleClick}>
                  <Icon aria-label="Logo">
                    <use href={Sprite + '#icon-eye'}></use>
                  </Icon>
                </Eye>
              </FormIcon>
              <ErrorMessage
                  name="password"
                  component="div"
                  style={{
                    color: 'red',
                    fontSize: 14,
                  }}
                />
            </FormFields>
            <Button type="submit" disabled={!isValid} > Send</Button>
          </Form>
         )}
        </Formik>
      </UserForm>
    </Container>
  );
}
