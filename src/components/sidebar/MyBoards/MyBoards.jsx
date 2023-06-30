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
import { Modal } from 'components/modal/modal';
import { EditBoard } from '../modalBoard/EditBoard';
// import { useDispatch } from 'react-redux';
// import { editBoard } from '../../../redux/dashboards/operations';

export const MyBoards = desk => {
  const [isOpen, setIsOpen] = useState(false);
  // const dispatch = useDispatch();

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
          <WrapperProjectOffice onClick={() => {}}>
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
            <IconButton onClick={() => {}}>
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
