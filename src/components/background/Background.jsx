import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Wrapper,
  List,
  Item,
  Label,
  Input,
  Img,
  FormQuestion,
} from './Background.styled';
import { backgroundUrl } from '../../redux/dashboards/operations';
import { selectBackgroundUrl } from '../../redux/dashboards/selectors';

export const Background = icons => {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();
  const selectBgIcons = useSelector(selectBackgroundUrl);

  useEffect(() => {
    dispatch(backgroundUrl());
  }, [dispatch]);

  const onClickIcon = e => {
    setItem(e.target.value);
  };
  console.log(item);

  return (
    <Wrapper>
      <List>
        <FormQuestion>Background</FormQuestion>
        {selectBgIcons.map(({ id, previewURL }) => (
          <Item key={id}>
            <Input
              onClick={onClickIcon}
              type="radio"
              name="id"
              id={id}
              value={id}
            />
            <Label htmlFor={id}>
              <Img src={previewURL} alt={'bg'} />
            </Label>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};
