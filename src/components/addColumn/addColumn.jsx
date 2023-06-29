import { useState } from 'react';
import { AddColumnForm } from './addColumnForm/addColumnForm';
// import sprite from '../../images/symbol-defs.svg';
// import { Button, IconPlus } from './addColumn.styled';
import SubmitButton from '../submitButton/submitButton';

export const AddColumn = ({ _id = '649d310119f7c8d34db12c34' }) => {
  const [modal, setModal] = useState(false);

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const columns = [1]; // для тесту
  const buttonText = columns.length > 0 ? 'Add another column' : 'Add column';

  return (
    <>
      <SubmitButton
        title={buttonText}
        type="button"
        width="334"
        height="56"
        theme="Dark"
        icon={true}
        addColumn={true}
        handleClick={handleOpen}
      />

      {modal && <AddColumnForm id={_id} onClose={handleClose} />}
    </>
  );
};
