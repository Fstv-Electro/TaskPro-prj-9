import { AddColumn } from 'components/addColumn/addColumn';
import { ColumnItem } from 'components/columnItem/columnItem';
import AddList from 'components/AddList/AddList';
import SubmitButton from '../submitButton/submitButton';
import { Container, List, Item } from './listColumns.styled';
import { useState } from 'react';
import { AddCardForm } from '../../components/addCardForm/addCardForm';
import { Modal } from 'components/modal/modal';
import { selectList, selectCurrentBoard } from 'redux/dashboards/selectors';
import { useSelector } from 'react-redux';

export const ListColumns = () => {
  const boardId = useSelector(selectCurrentBoard);
  const lists = useSelector(selectList);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <Container>
        {lists.length > 0 && (
          <List>
            {lists.map(({ _id, title, tasks }) => {
              return (
                <Item key={_id}>
                  <ColumnItem item={{ _id, title }} />
                  {/*  */}
                  <AddList tasks={tasks} />
                  {/*  */}
                  <SubmitButton
                    title="Add another card"
                    type="button"
                    width={334}
                    height="56"
                    theme="Dark"
                    icon={true}
                    handleClick={toggleModal}
                  />
                  {isOpen && (
                    <Modal
                      onClose={toggleModal}
                      children={<AddCardForm onClose={toggleModal} id={_id} />}
                    />
                  )}
                </Item>
              );
            })}
          </List>
        )}
        <AddColumn boardId={boardId} numberOfColumns={Number(lists.length)} />
        {isOpen && (
          <Modal
            onClose={toggleModal}
            children={<AddCardForm onClose={toggleModal} />}
          />
        )}
      </Container>
    </>
  );
};