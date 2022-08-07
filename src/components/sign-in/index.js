import { ROUTES, TOKEN_STORAGE_KEY } from '../../helpers/constants';
import { setToken } from '../../store/actions/action-creators';
import { useDispatch, useSelector } from 'react-redux';
import { tokenSelector } from '../../store/selectors';
import { useNavigate } from 'react-router-dom';
import AuthCtrl from '../../controllers/auth';
import { useEffect, useState } from 'react';
import lock1 from '../../assets/images/lock1.png';


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
    <div  style={{marginLeft: '650px', marginTop: '100px'}}>
        <img src={lock1} alt="lock"  style={{width:'50px', height: '50px', marginLeft:'100px'}}/>
      <h1 style={{marginLeft:'80px', marginBottom:'20px'}}>Sign in</h1>
      <div>
      <input
        type="text"
        placeholder="Email Address *"
        style={{height:'40px', width:'300px', borderRadius:"5px", borderWidth:'1px'}}
        onChange={onEmailChange}
      />
      </div>
      <div>
      <input
        type="password"
        placeholder="Password *"
        style={{height:'40px', width:'300px', marginTop:'20px', borderRadius:"5px", borderWidth:'1px'}}
        onChange={onPasswordChange}
      />
      </div>
        <div style={{marginTop:'20px'}}>
            <input type="checkbox"/> Remember me
        </div>
      <div>
      <button onClick={onSignIn} style={{height:'35px',width:'310px',marginTop:'20px',color:'white',borderRadius:"5px",backgroundColor:'#1976d2',borderWidth:'0px'}}>
        SIGN IN
      </button>
      </div>
    </div>
  )
};

export default SignIn;
