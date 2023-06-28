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

export const ColumnItem = () => {
  //     const dispatch = useDispatch();
  //   const columns = useColumns();
  const [modal, setModal] = useState(false);

  const item = { title: 'TO DO' };

  //   const handleOpen = columns => {
  //     setSelectedColumn(columns);
  //     setModal(true);
  //   };

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
          <Button type="button" onClick={() => console.log('delete')}>
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
