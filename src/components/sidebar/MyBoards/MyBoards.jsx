import {
  List,
  Item,
  WrapperProjectOffice,
  Project,
  WrapperProjectIcons,
  IconButton,
  NavItem
} from './MyBoards.styled';
import sprite from '../../../images/symbol-defs.svg';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentBoard, selectBoard } from 'redux/dashboards/selectors';
import { useParams } from 'react-router-dom';
import { AddCurrent } from 'redux/dashboards/slice';

export const MyBoards = (desk) => {
  const dispatch = useDispatch();
  const boards = useSelector(selectBoard);
  const crntBoard = useSelector(selectCurrentBoard);
  const board = useParams();
  // AddCurrent(desk);
  console.log(desk);



  if (desk.desk === undefined) {
    return;
  }

  const deskRoute = desk.desk.title.split(' ').join('-');
  const pjIcon = `#${desk.desk.icon}`;
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
          <IconButton onClick={() => {}}>
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
    </List>
  );
};
