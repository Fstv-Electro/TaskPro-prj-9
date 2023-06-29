import { Modal } from 'components/modal/modal';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { ButtonClose } from 'components/modalBtnClose/ButtonClose';
import {
  Container,
  TESTbackgroundAvatars,
  Title,
  Div,
  Text,
  Button,
  LabelGroup,
  Label,
  Field,
} from './FitlerForm.styled';

import { setFilter } from 'redux/dashboards/operations';

export const Filter = ({ onClose }) => {
  const dispatch = useDispatch();

  const initialValues = {
    currentBg: 0,
    currentPrority: 'without priority',
  };

  function handleChange(evt) {
    dispatch(setFilter(evt.target.value));
  }

  return (
    <Modal onClose={onClose}>
      <Container>
        <ButtonClose onClose={onClose} />
        <Title>Filters</Title>
        <Formik initialValues={initialValues}>
          <Form autocomplete="off" onChange={handleChange}>
            <TESTbackgroundAvatars>Background</TESTbackgroundAvatars>
            {/* тут маж бути компонент backgroundAvatars */}
            <LabelGroup role="group" aria-labelledby="my-radio-group">
              <Div>
                <Text>Label color</Text>
                <Button>Show all</Button>
              </Div>
              <Label>
                <Field
                  type="radio"
                  name="currentPrority"
                  value="Without priority"
                />
                Without priority
              </Label>
              <Label>
                <Field type="radio" name="currentPrority" value="Low" />
                Low
              </Label>
              <Label>
                <Field type="radio" name="currentPrority" value="Medium" />
                Medium
              </Label>
              <Label>
                <Field type="radio" name="currentPrority" value="High" />
                High
              </Label>
            </LabelGroup>
          </Form>
        </Formik>
      </Container>
    </Modal>
  );
};
