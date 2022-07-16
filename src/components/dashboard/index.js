import { examResultSelector, tokenSelector } from '../../store/selectors';
import { ROUTES, TOKEN_STORAGE_KEY } from '../../helpers/constants';
import { setToken } from '../../store/actions/action-creators';
import DashboardCtrl from '../../controllers/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import '../../assets/styles/dashboard.css';

const Dashboard = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);
  const examResult = useSelector(examResultSelector);

  useEffect(() => {
    DashboardCtrl.getExamResult();
  }, []);

  useEffect(() => {
    if (!token) {
      navigate(ROUTES.SIGN_IN);
    }
  }, [token]);

  const onSignOut = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    dispatch(setToken(null));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {examResult ? (
        <div>
          <h3>Exam result</h3>
          <div>Your score is</div>
          <div>{examResult.score} of {examResult.maxScore}</div>
          <div>{examResult.passed ? 'PASSED' : 'NOT PASSED'}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <button onClick={onSignOut}>Sign out</button>
    </div>
  )
};

export default Dashboard;
