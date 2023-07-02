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
// import { selectList } from 'redux/dashboards/selectors';

export const ColumnItem = ({ item }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  return (
    <>
      <Container>
        <Title>{item.title}</Title>
        <BtnContainer>
          <Button type="button" onClick={handleOpen}>
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
      {modal && <EditColumnForm item={item} onClose={handleClose} />}
    </>
  );
};
