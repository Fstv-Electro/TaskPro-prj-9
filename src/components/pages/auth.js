import { useParams } from 'react-router-dom';

export const Auth = () => {
  const { id } = useParams();

  let a;
  if (id === 'login') {
    a = true;
  } else {
    a = false;
  }

  return (
    <div>auth cto-to tam {a ? <div>login</div> : <div>register</div>}</div>
  );
};
