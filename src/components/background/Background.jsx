import { useEffect } from 'react';
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
import plug from '../../images/plug.png';

export const Background = ({ getBg }) => {
  const dispatch = useDispatch();
  const selectBgIcons = useSelector(selectBackgroundUrl);

  useEffect(() => {
    dispatch(backgroundUrl());
  }, [dispatch]);

  const onClickBg = e => {
    getBg(e.target.value);
  };

  return (
    <Wrapper>
      <FormQuestion>Background</FormQuestion>
      <List>
        <Item key={'1'}>
          <Input
            onClick={onClickBg}
            type="radio"
            name="id"
            id={'1'}
            value={'1'}
          />
          <Label htmlFor={'1'}>
            <Img src={plug} alt={'bg'} />
          </Label>
        </Item>
        {selectBgIcons.map(({ _id, previewURL }) => (
          <Item key={_id}>
            <Input
              onClick={onClickBg}
              type="radio"
              name="id"
              id={_id}
              value={_id}
            />
            <Label htmlFor={_id}>
              <Img src={previewURL} alt={'bg'} />
            </Label>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};
