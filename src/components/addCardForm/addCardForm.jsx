import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import moment from 'moment';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ButtonClose } from 'components/modalBtnClose/ButtonClose';
import { Calendar } from '../datePicker/datePicker';
import sprite from '../../images/symbol-defs.svg';
import { addTask } from 'redux/dashboards/operations';
import {
  TitleForm,
  InputTitle,
  InputDescription,
  TitleStatus,
  BlockStatus,
  RadioBtn,
  TitleDeadline,
  ColorStatus,
  CalendarShow,
  SubmitButton,
  IconPlus,
} from '../../components/addCardForm/addCardForm.styled';

const initialValues = {
  title: '',
  description: '',
  priority: 'without',
};


export const AddCardForm = ({ columnId, onClose }) => {
  const [deadline, setDeadline] = useState();
  const dispatch = useDispatch();

  const setDateValue = value => {
    setDeadline(value);
  };

  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
  });

  const formatDate = param => {
    let a = moment(param);
    const deadline = a.format('DD-MM-YYYY');
    return deadline;
  };

  const determineTodayTomorrow = date => {
    const d = moment(date);
    const today = moment().endOf('day');
    const tomorrow = moment().add(1, 'day').endOf('day');
    if (d < today) return 'Today';
    if (d < tomorrow) return 'Tomorrow';
    return 'in ' + d.fromNow(true);
  };

  const displayDeadline = date => {
    let printDeadline = 'Today, ' + moment().format('MMMM D');
    if (date) {
      if (date.diff(moment()) < 0) {
        Notify.failure('Select a date after now');
      }
      if (deadline) {
        printDeadline =
          determineTodayTomorrow(deadline.$d) +
          ', ' +
          moment(deadline.$d).format('MMMM D');
        return printDeadline;
      } else {
        printDeadline = 'Today, ' + moment().format('MMMM D');
      }
      return printDeadline;
    }
    return printDeadline;
  };

  const handleSubmit = (values, actions) => {
    values = {
      ...values,
      deadline: formatDate(deadline.$d),
      parentColumn: columnId,
    };
    actions.resetForm();
    dispatch(addTask(values));
    onClose();
  };

  return (
    <div>
      <ButtonClose onClose={onClose} />
      <TitleForm>Add card</TitleForm>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ values }) => (
          <Form>
            <InputTitle type="text" name="title" placeholder="Title" />
            <ErrorMessage 
            name="title" 
            component="div"
            style={{
              color: 'red',
              fontSize: 14,
            }}
            />
            <InputDescription
              type="text"
              name="description"
              placeholder="Description"
              as="textarea"
            />
            <ErrorMessage 
            name="description" 
            component="div"
            style={{
              color: 'red',
              fontSize: 14,
            }}
            />
            <TitleStatus id="taskStatusGroup">Label color</TitleStatus>
            <BlockStatus role="group" aria-labelledby="taskStatusGroup">
              <label style={{ '--color': '#8FA1D0' }}>
                <RadioBtn type="radio" name="priority" value="low" />
                <ColorStatus color="#8FA1D0"></ColorStatus>
              </label>
              <label style={{ '--color': '#E09CB5' }}>
                <RadioBtn type="radio" name="priority" value="medium" />
                <ColorStatus color="#E09CB5"></ColorStatus>
              </label>
              <label style={{ '--color': '#BEDBB0' }}>
                <RadioBtn type="radio" name="priority" value="high" />
                <ColorStatus color="#BEDBB0"></ColorStatus>
              </label>
              <label style={{ '--color': 'var(--item-span-color)' }}>
                <RadioBtn type="radio" name="priority" value="without" />
                <ColorStatus color="var(--item-span-color)"></ColorStatus>
              </label>
            </BlockStatus>
            <TitleDeadline>Deadline</TitleDeadline>
            <CalendarShow>
              <div>{displayDeadline(deadline)}</div>
              <Calendar parentState={setDateValue} />
            </CalendarShow>
            <SubmitButton type="submit">
              <IconPlus aria-label="add">
                <use href={sprite + '#icon-plus-add'}></use>
              </IconPlus>
              Add
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};
