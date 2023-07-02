import { useState } from 'react';
import {
  List,
  Item,
  WrapperProjectOffice,
  Project,
  WrapperProjectIcons,
  IconButton,
  NavItem,
  IconEdit,
  IconDelete,
  BtnContainer,
} from './MyBoards.styled';
import sprite from '../../../images/symbol-defs.svg';
import { fetchColumns, fetchTasks } from 'redux/dashboards/operations';
import { changeBg, changeCurrentBoard } from 'redux/dashboards/slice';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/modal/modal';
import { EditBoard } from '../modalBoard/EditBoard';
import { DeleteBoard } from '../modalBoard/DeleteBoard';
import { deleteBoard } from '../../../redux/dashboards/operations';

export const MyBoards = (desk, id) => {
  const [isOpen, setIsOpen] = useState(false);
  const [typeModal, setTypeModal] = useState('');
  const dispatch = useDispatch();

  const getColumns = (id) => {
    dispatch(fetchColumns(id));
    dispatch(fetchTasks());
    dispatch(changeBg(desk.desk.currentBg));
    dispatch(changeCurrentBoard(id));
  };

  if (desk.desk === undefined) {
    return;
  }

  const deskRoute = desk.desk.title.split(' ').join('-');

  const pjIcon = `#${desk.desk.icon}`;

  const toggleModal = typeToggle => {
    setIsOpen(isOpen => !isOpen);
    setTypeModal(typeToggle);
  };
  return (
    <List>
      <Item>
        <NavItem to={deskRoute}>
          <WrapperProjectOffice onClick={() => getColumns(desk.id)}>
            <svg aria-label="question with round" width="18px" height="16px">
              <use href={sprite + pjIcon}></use>
            </svg>
            <Project>{desk.desk.title}</Project>
          </WrapperProjectOffice>
          <BtnContainer>
            <WrapperProjectIcons>
              <IconEdit onClick={() => toggleModal('edit')}>
                <svg
                  aria-label="question with round"
                  width="16px"
                  height="16px"
                >
                  <use href={sprite + `#icon-pencil-01`}></use>
                </svg>
              </IconEdit>
            </WrapperProjectIcons>
            <WrapperProjectIcons>
              <IconDelete onClick={() => toggleModal('delete')}>
                <svg
                  aria-label="question with round"
                  width="16px"
                  height="16px"
                >
                  <use href={sprite + '#icon-trash-04'}></use>
                </svg>
              </IconDelete>
            </WrapperProjectIcons>
          </BtnContainer>
        </NavItem>
      </Item>
      {isOpen &&
        (typeModal === 'edit' ? (
          <Modal
            onClose={toggleModal}
            children={<EditBoard desk={desk} onClose={toggleModal} />}
          />
        ) : (
          <Modal
            onClose={toggleModal}
            children={<DeleteBoard desk={desk} onClose={toggleModal} />}
          />
        ))}
    </List>
  );
};
