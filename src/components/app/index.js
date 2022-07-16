import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from '../../helpers/constants';
import Dashboard from '../dashboard';
import SignIn from '../sign-in';
import React  from 'react';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.SIGN_IN} element={<SignIn/>}/>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}/>

        <Route path="*" element={<Navigate to={ROUTES.SIGN_IN}/>}/>
      </Routes>
    </Router>
  );
};

export default App;
