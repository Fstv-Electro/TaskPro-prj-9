import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from 'yup';
import moment from 'moment';
import { ButtonClose } from 'components/modalBtnClose/ButtonClose';
import { Calendar } from '../datePicker/datePicker';
import sprite from '../../images/symbol-defs.svg'
import { addTask } from 'redux/dashboards/operations';
import { 
    Container,
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
    IconPlus
} from "../../components/addCardForm/addCardForm.styled";

const initialValues = {
  title: "",
  description: "",
  picked: "",
  dateDeadline: '',
};

export const AddCardForm = ({ id, onClose }) => {
    const [deadline, setDeadline] = useState()
    const dispatch = useDispatch();

    const setDateValue = (value) =>{
        setDeadline(value)
        console.log(deadline)
    };

  const schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
    });
    
    const formatDate = (param) => {
      let a = moment(param);
      const deadline = a.format('YYYY-MM-DD')
      console.log(deadline)
      return deadline
  };
  
  const determineTodayTomorrow = (date) => {
      const d = moment(date)
      const today = moment().endOf('day')
      const tomorrow = moment().add(1, 'day').endOf('day')
      if (d < today) return 'Today'
      if (d < tomorrow) return 'Tomorrow'
      return 'in '+d.fromNow(true)
  };
  
  const displayDeadline = (date) => {
    if ( date ){
      if (date.diff(moment()) < 0) { console.log ('error')}
      if (deadline) { 
          return determineTodayTomorrow(deadline.$d)+', '+moment(deadline.$d).format('MMMM D')
      }
      return 'Today, '+moment().format('MMMM D')
    }
}

const handleSubmit = (values, actions) => {
  values = {...values, deadline: formatDate(deadline)};
  actions.resetForm();
    dispatch(
      addTask(
        {
          parentColumn: id,
        ...values,
        }
      ));
  onClose();
};

  return(
        <Container>
            <TitleForm>Add card</TitleForm>
            <ButtonClose onClose={onClose} />
            <Formik 
                initialValues={initialValues}
                onSubmit={ handleSubmit }
                validationSchema={schema} >
            {({ values }) => (
            <Form>
                <InputTitle 
                    type='text' 
                    name="title"
                    placeholder="Title"
                    />
                    <ErrorMessage name="title"/>
                <InputDescription 
                    type='text' 
                    name="description"
                    placeholder="Description"/>
                    <ErrorMessage name="description"/>
                    <TitleStatus id="taskStatusGroup">Label color</TitleStatus>
                    <BlockStatus role="group" aria-labelledby="taskStatusGroup">
                        <label>
                            <RadioBtn type="radio" name="picked" value="low" />
                            <ColorStatus color='#8FA1D0' ></ColorStatus> 
                        </label>
                        <label>
                            <RadioBtn type="radio" name="picked" value="medium" />
                            <ColorStatus color='#E09CB5' ></ColorStatus> 
                        </label>
                        <label>
                            <RadioBtn type="radio" name="picked" value="high" />
                            <ColorStatus color='#BEDBB0'  ></ColorStatus> 
                        </label>
                        <label>
                            <RadioBtn type="radio" name="picked" value="default" checked/>
                            <ColorStatus color='#FFFFFF4D' ></ColorStatus> 
                        </label>     
                    </BlockStatus>
                    <TitleDeadline>Deadline</TitleDeadline>
                    <CalendarShow>
                        <div>{displayDeadline(deadline) }</div>
                        <Calendar parentState={setDateValue}/>
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
        </Container>
    )
}
