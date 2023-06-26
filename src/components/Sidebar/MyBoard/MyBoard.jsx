import {
  Item,
  WrapperProjectOffice,
  Project,
  WrapperProjectIcons,
  IconButton,
} from './MyBoard.styled';
import sprite from '../../../images/symbol-defs.svg';

export const MyBoard = () => {
  return (
    <list>
      <Item>
        <WrapperProjectOffice onClick={() => {}}>
          <svg aria-label="question with round" width="18px" height="16px">
            <use href={sprite + '#icon-Project'}></use>
          </svg>
          <Project>Project office</Project>
        </WrapperProjectOffice>
        <WrapperProjectIcons>
          <IconButton onClick={() => {}}>
            <svg aria-label="question with round" width="16px" height="16px">
              <use href={sprite + '#icon-pencil-01'}></use>
            </svg>
          </IconButton>
          <IconButton onClick={() => {}}>
            <svg aria-label="question with round" width="16px" height="16px">
              <use href={sprite + '#icon-trash-04'}></use>
            </svg>
          </IconButton>
        </WrapperProjectIcons>
      </Item>
    </list>
  );
};
