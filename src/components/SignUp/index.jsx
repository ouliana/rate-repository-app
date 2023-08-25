import SignUpContainer from './SignUpContainer';
import { useSignIn, useSignUp } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-native';

const SignUp = () => {
  const [signIn] = useSignIn();
  const [signUp] = useSignUp();

  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    await signUp({ username, password });
    await signIn({ username, password });
    navigate('/');
  };
  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
