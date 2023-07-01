import {
  Form,
  FormOptions,
  FormAnswer,
  Label,
  Input,
  Svg,
  FormQuestion,
} from './IconRadioButtons.styled';
import sprite from '../../images/symbol-defs.svg';

export const IconRadioButtons = ({ getIcon }) => {
  const icons = [
    { name: 'icon-Project', id: 'match_1' },
    { name: 'icon-star-04', id: 'match_2' },
    { name: 'icon-loading-03', id: 'match_3' },
    { name: 'icon-puzzle-piece-02', id: 'match_4' },
    { name: 'icon-container', id: 'match_5' },
    { name: 'icon-lightning-02', id: 'match_6' },
    { name: 'icon-colors', id: 'match_7' },
    { name: 'icon-hexagon-01', id: 'match_8' },
  ];

  const onClickIcon = e => {
    getIcon(e.target.value);
  };
  // console.log(item);
  return (
    <>
      <Form>
        <FormQuestion>Icons</FormQuestion>
        <FormOptions>
          {icons.map(({ name, id }) => (
            <FormAnswer key={id}>
              <Input
                onClick={onClickIcon}
                type="radio"
                name="match"
                id={id}
                value={name}
              />
              <Label htmlFor={id}>
                <Svg aria-label="question with round">
                  <use href={sprite + `#${name}`}></use>
                </Svg>
              </Label>
            </FormAnswer>
          ))}
        </FormOptions>
      </Form>
    </>
  );
};
