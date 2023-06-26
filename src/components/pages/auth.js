import { useParams } from 'react-router-dom';

import RegistrationView from 'components/auth/RegistrationView/RegistrationView';
import LoginView from 'components/auth/LoginView/LoginView';

export const Auth = () => {
  const { id } = useParams();

  let a;
  if (id === 'login') {
    a = true;
  } else {
    a = false;
  }

  return (
    <div>
      {a ? <LoginView></LoginView> : <RegistrationView></RegistrationView>}
    </div>
  );
};
