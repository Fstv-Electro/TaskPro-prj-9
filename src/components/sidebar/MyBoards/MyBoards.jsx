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
import { fetchColumns } from 'redux/dashboards/operations';
import { useDispatch } from 'react-redux';

export const MyBoards = (desk, id) => {
  const dispatch = useDispatch();


  const getColumns = (id) => {

    dispatch(fetchColumns(id))
  }

  if (desk.desk === undefined) {
    return;
  }

  const deskRoute = desk.desk.title.split(' ').join('-');
  const pjIcon = `#${desk.desk.icon}`;
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
