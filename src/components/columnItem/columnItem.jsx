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
import { useDispatch, useSelector } from 'react-redux';
import { deleteColumn, fetchColumns } from 'redux/dashboards/operations';
import { selectCurrentBoard } from 'redux/dashboards/selectors';

export const ColumnItem = ({ item }) => {
  const dispatch = useDispatch();
  const currentBoard = useSelector(selectCurrentBoard);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const onDelete = (id) => {
    dispatch(deleteColumn(id));
    dispatch(fetchColumns(currentBoard));
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
            onClick={() => onDelete(item._id)}
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
