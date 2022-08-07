import { examResultSelector, tokenSelector } from '../../store/selectors';
import { ROUTES, TOKEN_STORAGE_KEY } from '../../helpers/constants';
import { setToken } from '../../store/actions/action-creators';
import DashboardCtrl from '../../controllers/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



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
    <div style={{marginLeft:'50px'}}>
      <div style={{height:'50px', width:'300px',backgroundColor:'#1976d2'}}>
          <h3 style={{color:'white', marginLeft:'90px', padding:'15px'}}>Dashboard</h3>
      </div>
      {examResult ? (
        <div style={{marginLeft:'20px'}}>
          <h3 style={{color:'#1976d2'}}>Exam result</h3>
          <div>Your score is</div>
          <div><h2>{examResult.score} of {examResult.maxScore}</h2></div>
          <div>{examResult.passed ? 'PASSED' : 'NOT PASSED'}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <button
          onClick={onSignOut}
          style={{marginTop:'30px',color:'white',borderRadius:"5px", borderWidth:'1px',backgroundColor:'#1976d2',height:'40px',width:'150px'}}>
        Sign out
      </button>
    </div>
  )
};

export default Dashboard;
