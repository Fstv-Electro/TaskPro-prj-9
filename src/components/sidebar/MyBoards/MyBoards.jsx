import { useState } from 'react';
import {
  List,
  Item,
  WrapperProjectOffice,
  Project,
  WrapperProjectIcons,
  IconButton,
  NavItem,
} from './MyBoards.styled';
import sprite from '../../../images/symbol-defs.svg';
import { fetchColumns, fetchTasks } from 'redux/dashboards/operations';
import { changeBg } from 'redux/dashboards/slice';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/modal/modal';
import { EditBoard } from '../modalBoard/EditBoard';
import { deleteBoard } from '../../../redux/dashboards/operations';

export const MyBoards = (desk, id) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const getColumns = (id) => {
    dispatch(fetchColumns(id))
    dispatch(fetchTasks())
    dispatch(changeBg(desk.desk.currentBg))
  };

  if (desk.desk === undefined) {
    return;
  }

  const deskRoute = desk.desk.title.split(' ').join('-');

  const pjIcon = `#${desk.desk.icon}`;

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
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
          <WrapperProjectIcons>
            <IconButton onClick={toggleModal}>
              <svg aria-label="question with round" width="16px" height="16px">
                <use href={sprite + `#icon-pencil-01`}></use>
              </svg>
            </IconButton>
            <IconButton onClick={() => dispatch(deleteBoard(desk.id))}>
              <svg aria-label="question with round" width="16px" height="16px">
                <use href={sprite + '#icon-trash-04'}></use>
              </svg>
            </IconButton>
          </WrapperProjectIcons>
        </NavItem>
      </Item>
      {isOpen && (
        <Modal
          onClose={toggleModal}
          children={<EditBoard desk={desk} onClose={toggleModal} />}
        />
      )}
    </List>
  );
};
