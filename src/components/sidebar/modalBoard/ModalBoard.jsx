import { useState } from 'react';
import { Forma, Label, Input, FormTitle, BgWrapper } from './ModalBoard.styled';
import SubmitButton from '../../submitButton/submitButton';
import { IconRadioButtons } from '../../iconRadioButtons/IconRadioButtons';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ButtonClose } from '../../modalBtnClose/ButtonClose';
import { Background } from '../../background/Background';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../../redux/dashboards/operations';
import Notiflix from 'notiflix';

const schema = yup.object().shape({
  name: yup.string().required(),
});

export const ModalBoard = ({ onClose }) => {
  const [icon, setIcon] = useState('');
  const [currentBg, setCurrentBg] = useState('');
  

  const dispatch = useDispatch();

  const getIcon = icon => {
    setIcon({ icon });
  };
  const getBg = currentBg => {
    setCurrentBg({ currentBg });
  };

  const handleSubmit = (query, { resetForm }) => {
    if (!query) {
      Notiflix.Notify.failure('Something get wrong!');
    } else {
      dispatch(
        addBoard({
          title: query.name,
          ...currentBg,
          ...icon,
        })
      );
      resetForm();
    }
    onClose();
  };

  const initialValues = {
    name: '',
  };

  return (
    <>
      <ButtonClose onClose={onClose} />
      <FormTitle>New board</FormTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Forma>
          <Label htmlFor="name">
            <Input
              type="text"
              name="name"
              placeholder="Title"
              minLength="4"
              maxLength="12"
            />
            <ErrorMessage 
            name="name" 
            component="div"
            style={{
              color: 'red',
              fontSize: 14,
            }}
            />
          </Label>

          <IconRadioButtons getIcon={getIcon} />
          <BgWrapper>
            <Background getBg={getBg} />
          </BgWrapper>
          <SubmitButton
            type="submit"
            title="Create"
            width="302"
            height="49"
            icon={true}
            addColumn={false}
          />
        </Forma>
      </Formik>
    </>
  );
};
