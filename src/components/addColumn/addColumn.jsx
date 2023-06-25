import { useState } from 'react';
import { AddColumnForm } from './addColumnForm/addColumnForm';
import sprite from '../../images/symbol-defs.svg';
import { Button, IconPlus } from './addColumn.styled';

export const AddColumn = () => {
  const [modal, setModal] = useState(false);

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const columns = [1]; // для тесту
  const buttonText = columns.length > 0 ? 'Add another column' : 'Add column';

  return (
    <>
      <Button type="button" onClick={handleOpen}>
        <IconPlus aria-label="add">
          <use href={sprite + '#icon-plus-add'}></use>
        </IconPlus>
        {buttonText}
      </Button>
      {modal && <AddColumnForm onClose={handleClose} />}
    </>
  );
};
