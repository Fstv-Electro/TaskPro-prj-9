import sprite from '../../images/symbol-defs.svg';
import { SubmitBtn, IconPlus } from './submitButton.styled';

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
  width,
  height = 49,
  theme = 'Dark',
  icon = false,
  addColumn = false,
  handleClick,
}) {
  const bgColor = () => {
    if (theme === 'Dark' && !addColumn) return '#BEDBB0';
    if (theme === 'Light' && !addColumn) return '#BEDBB0';
    if (theme === 'Violet' && !addColumn) return '#5255BC';
    if (theme === 'Dark' && addColumn) return '#121212';
    if (theme === 'Light' && addColumn) return '#FFFFFF';
    if (theme === 'Violet' && addColumn) return '#FFFFFF';
  };
  const color = () => {
    if (theme === 'Dark' && !addColumn) return '#161616';
    if (theme === 'Light' && !addColumn) return '#161616';
    if (theme === 'Violet' && !addColumn) return '#FFFFFF';
    if (theme === 'Dark' && addColumn) return '#FFFFFF';
    if (theme === 'Light' && addColumn) return '#161616';
    if (theme === 'Violet' && addColumn) return '#161616';
  };

  const fill = () => {
    if (theme === 'Dark' && !addColumn) return '#121212';
    if (theme === 'Light' && !addColumn) return '#121212';
    if (theme === 'Violet' && !addColumn) return '#FFFFFF';
    if (theme === 'Dark' && addColumn) return '#FFFFFF';
    if (theme === 'Light' && addColumn) return '#161616';
    if (theme === 'Violet' && addColumn) return '#5255BC';
  };

  const svgColor = () => {
    if (theme === 'Dark' && !addColumn) return '#FFFFFF';
    if (theme === 'Light' && !addColumn) return '#FFFFFF';
    if (theme === 'Violet' && !addColumn) return '#161616';
    if (theme === 'Dark' && addColumn) return '#121212';
    if (theme === 'Light' && addColumn) return '#FFFFFF';
    if (theme === 'Violet' && addColumn) return '#FFFFFF';
  };

  return (
    <>
      <SubmitBtn
        width={width}
        height={height}
        bg={bgColor()}
        color={color()}
        onClick={handleClick}
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
