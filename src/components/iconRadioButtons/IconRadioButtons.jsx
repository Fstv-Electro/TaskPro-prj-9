// import { useState } from 'react';
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
  // const [item, setItem] = useState('');

  return (
    <>
      <Form>
        <form>
          <FormOptions>
            <FormQuestion>Icons</FormQuestion>
            <FormAnswer>
              <Input type="radio" name="match" id="match_1" value="guy" />
              <Label for="match_1">
                <Svg aria-label="question with round">
                  <use href={sprite + '#icon-Project'}></use>
                </Svg>
              </Label>
            </FormAnswer>

            <FormAnswer>
              <Input type="radio" name="match" id="match_2" value="girl" />
              <Label for="match_2">
                <Svg aria-label="question with round">
                  <use href={sprite + '#icon-star-04'}></use>
                </Svg>
              </Label>
            </FormAnswer>

            <FormAnswer>
              <Input type="radio" name="match" id="match_3" value="cat" />
              <Label for="match_3">
                <Svg aria-label="question with round">
                  <use href={sprite + '#icon-loading-03'}></use>
                </Svg>
              </Label>
            </FormAnswer>

            <FormAnswer>
              <Input type="radio" name="match" id="match_4" value="bacon" />
              <Label for="match_4">
                <Svg aria-label="question with round">
                  <use href={sprite + '#icon-puzzle-piece-02'}></use>
                </Svg>
              </Label>
            </FormAnswer>
            <FormAnswer>
              <Input type="radio" name="match" id="match_5" value="bacon" />
              <Label for="match_5">
                <Svg aria-label="question with round">
                  <use href={sprite + '#icon-container'}></use>
                </Svg>
              </Label>
            </FormAnswer>
            <FormAnswer>
              <Input type="radio" name="match" id="match_6" value="bacon" />
              <Label for="match_6">
                <Svg aria-label="question with round">
                  <use href={sprite + '#icon-lightning-02'}></use>
                </Svg>
              </Label>
            </FormAnswer>
            <FormAnswer>
              <Input type="radio" name="match" id="match_7" value="bacon" />
              <Label for="match_7">
                <Svg aria-label="question with round">
                  <use href={sprite + '#icon-colors'}></use>
                </Svg>
              </Label>
            </FormAnswer>
            <FormAnswer>
              <Input type="radio" name="match" id="match_8" value="bacon" />
              <Label for="match_8">
                <Svg aria-label="question with round">
                  <use href={sprite + '#icon-hexagon-01'}></use>
                </Svg>
              </Label>
            </FormAnswer>
          </FormOptions>
        </form>
      </Form>
    </>
  );
};
