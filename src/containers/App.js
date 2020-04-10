import React, {Fragment} from 'react';
import './App.css';
import MenuPage from './MenuPage/Menu';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import {GlobalStyles} from '../Global';
import LogInPage from './LogInPage/LogInPage';
import SignUpPage from './LogInPage/SignUpPage';
function App() { 
  
  return (
    <Fragment>
      <BrowserRouter>
      <GlobalStyles/>
          <Route path ='/Menu' component = {MenuPage}/>
          <Route path ='/Landing' exact component = {LandingPage}/>
          <Route path ='/LogIn' exact component = {LogInPage}/>
          <Route path ='/SignUp' exact component = {SignUpPage}/>
      </BrowserRouter> 
    </Fragment>
  );
}
export default App;
