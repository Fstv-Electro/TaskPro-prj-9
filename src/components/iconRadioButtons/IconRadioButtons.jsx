import { useState } from 'react';
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

export const IconRadioButtons = () => {
  const [item, setItem] = useState('');
  const icons = [
    { name: 'Project', id: 'match_1' },
    { name: 'star-04', id: 'match_2' },
    { name: 'loading-03', id: 'match_3' },
    { name: 'puzzle-piece-02', id: 'match_4' },
    { name: 'container', id: 'match_5' },
    { name: 'lightning-02', id: 'match_6' },
    { name: 'colors', id: 'match_7' },
    { name: 'hexagon-01', id: 'match_8' },
  ];

  const onClickIcon = e => {
    setItem(e.target.value);
  };
  console.log(item);
  return (
    <>
      <Form>
        <FormOptions>
          <FormQuestion>Icons</FormQuestion>
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
                  <use href={sprite + `#icon-${name}`}></use>
                </Svg>
              </Label>
            </FormAnswer>
          ))}
        </FormOptions>
      </Form>
    </>
  );
};
