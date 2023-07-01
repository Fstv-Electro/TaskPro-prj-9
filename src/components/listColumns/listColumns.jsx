import { AddColumn } from 'components/addColumn/addColumn';
import { ColumnItem } from 'components/columnItem/columnItem';
import SubmitButton from '../submitButton/submitButton';
import { Container, List, Item } from './listColumns.styled';
import { useState, useEffect } from 'react';
import { AddCardForm } from '../../components/addCardForm/addCardForm';
import { Modal } from '../../components/modal/modal';
import { selectList } from 'redux/dashboards/selectors';
import { useSelector, useDispatch } from 'react-redux';

export const ListColumns = ({
  idBoard = '64a06ca19ba6a167445ae5c9',
  children,
}) => {
  const selectLists = useSelector(selectList);
  // const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  useEffect(() => {
    console.log('selectLists changed:', selectLists);
  }, [selectLists]);

  return (
    <>
      <Container>
        {selectLists.length > 0 && (
          <List>
            {selectLists.map(({ _id, title }) => {
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
