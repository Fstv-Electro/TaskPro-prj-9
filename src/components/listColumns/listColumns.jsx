import { AddColumn } from 'components/addColumn/addColumn';
import { ColumnItem } from 'components/columnItem/columnItem';
import SubmitButton from '../submitButton/submitButton';
import { Container, List, Item } from './listColumns.styled';
import { useState } from 'react';
import { AddCardForm } from '../../components/addCardForm/addCardForm';
import { Modal } from 'components/modal/modal';
import { selectUserLists } from 'redux/dashboards/selectors';
import { useSelector } from 'react-redux';

export const ListColumns = ({
  idBoard = '64a1620b3ca80058c65ec37e',
  children,
}) => {
  const lists = useSelector(selectUserLists);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <Container>
        {lists.length > 0 && (
          <List>
            {lists.map(({ _id, title }) => {
              return (
                <Item key={_id}>
                  <ColumnItem item={{ _id, title }} />
                  <div>{children}</div>
                  <SubmitButton
                    title="Add another card"
                    type="button"
                    width={334}
                    height="56"
                    theme="Dark"
                    icon={true}
                    handleClick={toggleModal}
                  />
                </Item>
              );
            })}
          </List>
        )}
        <AddColumn _id={idBoard} />
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
