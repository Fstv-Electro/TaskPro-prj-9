import { AddColumn } from 'components/addColumn/addColumn';
import { ColumnItem } from 'components/columnItem/columnItem';
import SubmitButton from '../submitButton/submitButton';
import { Container, List, Item } from './listColumns.styled';

// вставлено для перевірки відмальовки компонентів
const columns = [
  {
    _id: '649d483af4c9cb1654f8e5ac',
    title: 'TO DOs',
    parentBoard: '649d310119f7c8d34db12c34',
  },
  {
    _id: '649d53c9f4c9cb1654f8e617',
    title: 'in progress',
    parentBoard: '649d310119f7c8d34db12c34',
  },
  {
    _id: '649d6156f4c9cb1654f8e697',
    title: 'Ask',
    parentBoard: '649d310119f7c8d34db12c34',
  },
];
// const columns = 0;

export const ListColumns = ({ children }) => {
  return (
    <>
      <Container>
        {columns.length > 0 && (
          <List>
            {columns.map(({ _id, title }) => {
              return (
                <Item key={_id}>
                  <ColumnItem item={{ _id, title }} />
                  <div>{children}</div>
                  <SubmitButton
                    title="Add another card"
                    type="button"
                    width={334}
                    height="56"
                    theme="Dark"
                    icon={true}
                  />
                </Item>
              );
            })}
          </List>
        )}
        <AddColumn />
      </Container>
    </>
  );
};
