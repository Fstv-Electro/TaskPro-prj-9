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
  let setBg;
  console.log(setBg);

  const initialValues = {
    currentBg: 0,
    currentPrority: '',
  };

  const handleChange = event => {
    const filter = event.target.value;
    dispatch(setFilterCards(filter));
  };

  const handleShowAll = () => {
    dispatch(setFilterCards(''));
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
                <Button type="button" onClick={handleShowAll}>
                  Show all
                </Button>
              </Div>
              <Label>
                <Field
                  type="radio"
                  name="currentPrority"
                  value="without"
                  color={'rgba(255, 255, 255, 0.3)'}
                />
                Without priority
              </Label>
              <Label>
                <Field
                  type="radio"
                  name="currentPrority"
                  value="low"
                  color={'#8FA1D0'}
                />
                Low
              </Label>
              <Label>
                <Field
                  type="radio"
                  name="currentPrority"
                  value="medium"
                  color={'#E09CB5'}
                />
                Medium
              </Label>
              <Label>
                <Field
                  type="radio"
                  name="currentPrority"
                  value="high"
                  color={'#BEDBB0'}
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
