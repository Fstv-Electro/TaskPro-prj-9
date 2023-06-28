import {
  List,
  Item,
  WrapperProjectOffice,
  Project,
  WrapperProjectIcons,
  IconButton,
} from './MyBoards.styled';
import sprite from '../../../images/symbol-defs.svg';

export const MyBoards = (desk) => {
  if (desk.desk === undefined) {
    return;
  }

  const pjIcon = `#${desk.desk.icon}`;
  return (
    <List>
      <Item>
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
      </Item>
    </List>
  );
};
