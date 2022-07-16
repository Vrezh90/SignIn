import { ROUTES, TOKEN_STORAGE_KEY } from '../../helpers/constants';
import { setToken } from '../../store/actions/action-creators';
import { useDispatch, useSelector } from 'react-redux';
import { tokenSelector } from '../../store/selectors';
import { useNavigate } from 'react-router-dom';
import AuthCtrl from '../../controllers/auth';
import { useEffect, useState } from 'react';

import '../../assets/styles/signIn.css';

const SignIn = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const [tokenChecked, setTokenChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (token) {
      dispatch(setToken(token));
    }
    setTokenChecked(true);
  }, []);

  useEffect(() => {
    if (token) {
      navigate(ROUTES.DASHBOARD);
    }
  }, [token]);

  const onSignIn = () => {
    if (email && password) {
      AuthCtrl.signIn(email, password);
    } else {
      alert('Please enter valid fields!');
    }
  };

  const onEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const onPasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  if (!tokenChecked) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      Sign in
      <input
        type="text"
        placeholder="Email Address *"
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password *"
        onChange={onPasswordChange}
      />
      <button onClick={onSignIn}>
        SIGN IN
      </button>
    </div>
  )
};

export default SignIn;
