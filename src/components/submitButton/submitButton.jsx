import sprite from '../../images/symbol-defs.svg';
import { SubmitBtn, IconPlus } from './submitButton.styled';
import { useSelector } from "react-redux";
import { selectUser } from 'redux/auth/selectores';

// How to use
// import SubmitButton from './submitButton/submitButton';
// add element <SubmitButton />
// props:
// width : default 100%
// height:  default 49px
// title:  default 49px
// theme:  default Dark
// icon: default false
// addColumn: default false
// handleClick: without Default value
// example: <SubmitButton title="Send" width="352" height="49" theme="Dark" handleClick={YOUR METHOD NAME}/>
// example <SubmitButton title="Edit" width="302" height="49" theme="Dark" icon={true} handleClick={YOUR METHOD NAME}/>
// example <SubmitButton title="Edit" width="302" height="49" theme="Dark" icon={true} handleClick={YOUR METHOD NAME}/>
// example <SubmitButton title="Add another column" width="334" height="56" theme="Dark" icon={true} addColumn={true} handleClick={YOUR METHOD NAME}/>

export default function SubmitButton({
  title = 'Add',
  type,
  width,
  height = 49,
  icon = false,
  addColumn = false,
  handleClick,
}) {
  const {theme} = useSelector(selectUser);

  const bgColor = () => {
    if (theme === 'dark' && !addColumn) return '#BEDBB0';
    if (theme === 'light' && !addColumn) return '#BEDBB0';
    if (theme === 'violet' && !addColumn) return '#5255BC';
    if (theme === 'dark' && addColumn) return '#121212';
    if (theme === 'light' && addColumn) return '#FFFFFF';
    if (theme === 'violet' && addColumn) return '#FFFFFF';
  };
  const color = () => {
    if (theme === 'dark' && !addColumn) return '#161616';
    if (theme === 'light' && !addColumn) return '#161616';
    if (theme === 'violet' && !addColumn) return '#FFFFFF';
    if (theme === 'dark' && addColumn) return '#FFFFFF';
    if (theme === 'light' && addColumn) return '#161616';
    if (theme === 'violet' && addColumn) return '#161616';
  };

  const fill = () => {
    if (theme === 'dark' && !addColumn) return '#121212';
    if (theme === 'light' && !addColumn) return '#121212';
    if (theme === 'violet' && !addColumn) return '#FFFFFF';
    if (theme === 'dark' && addColumn) return '#FFFFFF';
    if (theme === 'light' && addColumn) return '#161616';
    if (theme === 'violet' && addColumn) return '#5255BC';
  };

  const svgColor = () => {
    if (theme === 'dark' && !addColumn) return '#FFFFFF';
    if (theme === 'light' && !addColumn) return '#FFFFFF';
    if (theme === 'violet' && !addColumn) return '#161616';
    if (theme === 'dark' && addColumn) return '#121212';
    if (theme === 'light' && addColumn) return '#FFFFFF';
    if (theme === 'violet' && addColumn) return '#FFFFFF';
  };

  return (
    <>
      <SubmitBtn
        width={width}
        height={height}
        bg={bgColor()}
        color={color()}
        onClick={handleClick}
        type={type}
      >
        {icon && (
          <IconPlus aria-label="add" fill={fill()} color={svgColor()}>
            <use href={sprite + '#icon-plus-add'}></use>
          </IconPlus>
        )}
        {title}
      </SubmitBtn>
    </>
  );
}
