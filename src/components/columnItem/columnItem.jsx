import { useState } from 'react';
import sprite from '../../images/symbol-defs.svg';
import { EditColumnForm } from 'components/addColumn/addColumnForm/editColumnForm';
import {
  Container,
  Title,
  Button,
  IconEdit,
  IconDelete,
  BtnContainer,
} from './columnItem.styled';
import { useDispatch } from 'react-redux';
import { deleteColumn } from 'redux/dashboards/operations';

export const ColumnItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <Container>
        <Title>{item.title}</Title>
        <BtnContainer>
          <Button type="button" onClick={toggleModal}>
            <IconEdit aria-label="edit">
              <use href={sprite + '#icon-pencil-01'}></use>
            </IconEdit>
          </Button>
          <Button
            type="button"
            onClick={() => dispatch(deleteColumn(item._id))}
          >
            <IconDelete aria-label="delete">
              <use href={sprite + '#icon-trash-04'}></use>
            </IconDelete>
          </Button>
        </BtnContainer>
      </Container>
      {isOpen && <EditColumnForm item={item} onClose={toggleModal} />}
    </>
  );
};
