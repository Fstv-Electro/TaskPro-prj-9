import { useState } from 'react';
import { AddColumnForm } from './addColumnForm/addColumnForm';
import { Button } from './addColumn.styled';

export const AddColumn = () => {
  const [modal, setModal] = useState(false);

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Add another column
      </Button>
      {modal && <AddColumnForm onClose={handleClose} />}
    </div>
  );
};
