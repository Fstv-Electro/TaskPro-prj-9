import { useState } from 'react';
import { Forma, Label, Input, FormTitle, BgWrapper } from './ModalBoard.styled';
import SubmitButton from '../../submitButton/submitButton';
import { IconRadioButtons } from '../../iconRadioButtons/IconRadioButtons';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ButtonClose } from '../../modalBtnClose/ButtonClose';
import { Background } from '../../background/Background';
import { useDispatch } from 'react-redux';
import { editBoard } from '../../../redux/dashboards/operations';
import Notiflix from 'notiflix';

const schema = yup.object().shape({
  name: yup.string().required(),
});

export const EditBoard = ({ desk, onClose }) => {
  const [icon, setIcon] = useState(desk.desk.icon);
  const [currentBg, setCurrentBg] = useState(desk.desk.currentBg);

  const dispatch = useDispatch();

  const getIcon = icon => {
    setIcon(icon);
  };
  const getBg = currentBg => {
    setCurrentBg(currentBg);
  };

  const handleSubmit = (query, { resetForm }) => {
    if (!query) {
      Notiflix.Notify.failure('Something got wrong');
    } else {
      dispatch(
        editBoard({
          title: query.name,
          currentBg: currentBg,
          icon: icon,
          id: desk.desk._id,
        })
      );
      resetForm();
    }
    onClose();
  };

  return (
    <>
      <ButtonClose onClose={onClose} />
      <FormTitle>Edit board</FormTitle>
      <Formik
        initialValues={{ id: desk.desk._id, name: desk ? desk.desk.title : '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Forma>
          <Label htmlFor="name">
            <Input
              type="text"
              name="name"
              placeholder="Title"
              required
              minLength="4"
              maxLength="12"
            />
            <ErrorMessage name="name" component="div" />
          </Label>

          <IconRadioButtons getIcon={getIcon} />
          <BgWrapper>
            <Background getBg={getBg} />
          </BgWrapper>
          <SubmitButton
            type="submit"
            title="Edit"
            width="302"
            height="49"
            theme="Dark"
            icon={true}
            addColumn={false}
          />
        </Forma>
      </Formik>
    </>
  );
};
