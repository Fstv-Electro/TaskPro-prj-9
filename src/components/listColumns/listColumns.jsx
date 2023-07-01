import { AddColumn } from 'components/addColumn/addColumn';
import { ColumnItem } from 'components/columnItem/columnItem';
import SubmitButton from '../submitButton/submitButton';
import { Container, List, Item } from './listColumns.styled';
import { useState } from 'react';
import { AddCardForm } from '../../components/addCardForm/addCardForm';
import { Modal } from '../../components/modal/modal';
// вставлено для перевірки відмальовки компонентів
const columns = [
  {
    _id: '649d483af4c9cb1654f8e5ac',
    title: 'TO DOs',
    parentBoard: '649d310119f7c8d34db12c34',
  },
  {
    _id: '649d53c9f4c9cb1654f8e617',
    title: 'in progress',
    parentBoard: '649d310119f7c8d34db12c34',
  },
  {
    _id: '649d6156f4c9cb1654f8e697',
    title: 'Ask',
    parentBoard: '649d310119f7c8d34db12c34',
  },
];
// const columns = 0;

export const ListColumns = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
    const toggleModal = () => {
      setIsOpen(isOpen => !isOpen)
    };

  return (
    <>
      <Container>
        {columns.length > 0 && (
          <List>
            {columns.map(({ _id, title }) => {
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
                  {isOpen && <Modal onClose={toggleModal} children={<AddCardForm onClose={toggleModal} id={_id}/>} />}
                </Item>
              );
            })}
          </List>
        )}
        <AddColumn />
      </Container>
    </>
  );
};
