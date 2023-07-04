import { useState } from 'react';
import { Modal } from 'components/modal/modal';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { ButtonClose } from 'components/modalBtnClose/ButtonClose';
import {
  Container,
  BackgroundWrapper,
  Title,
  Div,
  Text,
  Button,
  LabelGroup,
  Label,
  Field,
} from './FitlerForm.styled';
import { setFilterCards } from 'redux/dashboards/slice';
import { Background } from 'components/background/Background';

export const Filter = ({ onClose }) => {
  const dispatch = useDispatch();
  const [isShowAllActive, setIsShowAllActive] = useState(false);
  const [currentPrority, setCurrentPrority] = useState('');
  let setBg;
  console.log(setBg);

  const initialValues = {
    currentBg: 0,
    currentPrority: '',
  };

  const handleChange = event => {
    const filter = event.target.value;
    setCurrentPrority(filter);
    dispatch(setFilterCards(filter));
    setIsShowAllActive(false);
  };

  const handleShowAll = () => {
    setCurrentPrority('');
    dispatch(setFilterCards(''));
    setIsShowAllActive(true);
  };

  const handleRadioClick = () => {
    if (isShowAllActive) {
      setIsShowAllActive(false);
    }
  };

  const getBg = currentBg => {
    //await зробити діспатч(запит на зміну бекграунду дошки) може patch запит за /api/boards/{id}
    // а потім змінити стейт currentBg
    // чекаємо на бек
    setBg = currentBg;
  };

  return (
    <Modal onClose={onClose}>
      <Container>
        <ButtonClose onClose={onClose} />
        <Title>Filters</Title>
        <Formik initialValues={initialValues}>
          <Form onChange={handleChange}>
            <BackgroundWrapper>
              <Background getBg={getBg} />
            </BackgroundWrapper>
            <LabelGroup role="group" aria-labelledby="my-radio-group">
              <Div>
                <Text>Label color</Text>
                <Button
                  type="button"
                  onClick={handleShowAll}
                  disabled={isShowAllActive}
                >
                  Show all
                </Button>
              </Div>
              <Label>
                <Field
                  type="radio"
                  name="currentPrority"
                  value="without"
                  color={'rgba(255, 255, 255, 0.3)'}
                  checked={currentPrority === 'without'}
                  onClick={handleRadioClick}
                />
                Without priority
              </Label>
              <Label>
                <Field
                  type="radio"
                  name="currentPrority"
                  value="low"
                  color={'#8FA1D0'}
                  checked={currentPrority === 'low'}
                  onClick={handleRadioClick}
                />
                Low
              </Label>
              <Label>
                <Field
                  type="radio"
                  name="currentPrority"
                  value="medium"
                  color={'#E09CB5'}
                  checked={currentPrority === 'medium'}
                  onClick={handleRadioClick}
                />
                Medium
              </Label>
              <Label>
                <Field
                  type="radio"
                  name="currentPrority"
                  value="high"
                  color={'#BEDBB0'}
                  checked={currentPrority === 'high'}
                  onClick={handleRadioClick}
                />
                High
              </Label>
            </LabelGroup>
          </Form>
        </Formik>
      </Container>
    </Modal>
  );
};
