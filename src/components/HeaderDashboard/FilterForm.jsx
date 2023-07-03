import { Modal } from 'components/modal/modal';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
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
import { setFilter } from 'redux/dashboards/operations';
import { setFilterCards } from 'redux/dashboards/slice';
import { Background } from 'components/background/Background';
import { selectCard } from 'redux/dashboards/selectors';

export const Filter = ({ onClose }) => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCard);
  console.log(cards);

  const initialValues = {
    currentBg: 0,
    currentPrority: 'without priority',
  };

  function handleChange(evt) {
    const filter = evt.target.value;
    const filteredCards = cards.filter(card => card.priority === filter);
    dispatch(setFilterCards(filteredCards));
    dispatch(setFilter(filter));
  }

  function handleClick() {
    dispatch(setFilterCards(cards));
    dispatch(setFilter('All'));
  }

  return (
    <Modal onClose={onClose}>
      <Container>
        <ButtonClose onClose={onClose} />
        <Title>Filters</Title>
        <Formik initialValues={initialValues}>
          <Form autoComplete='off' onChange={handleChange}>
            <BackgroundWrapper>
              <Background />
            </BackgroundWrapper>
            <LabelGroup role="group" aria-labelledby="my-radio-group">
              <Div>
                <Text>Label color</Text>
                <Button type="button" onClick={handleClick}>
                  Show all
                </Button>
              </Div>
              <Label>
                <Field
                  type="radio"
                  name="currentPrority"
                  value="Without priority"
                  color={'rgba(255, 255, 255, 0.3)'}
                />
                Without priority
              </Label>
              <Label>
                <Field
                  type="radio"
                  name="currentPrority"
                  value="Low"
                  color={'#8FA1D0'}
                />
                Low
              </Label>
              <Label>
                <Field
                  type="radio"
                  name="currentPrority"
                  value="Medium"
                  color={'#E09CB5'}
                />
                Medium
              </Label>
              <Label>
                <Field
                  type="radio"
                  name="currentPrority"
                  value="High"
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
