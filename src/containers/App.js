import React, {Fragment} from 'react';
import './App.css';
import MenuPage from './MenuPage/Menu';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import {GlobalStyles} from '../Global';
import LogInPage from './LogInPage/LogInPage';
import SignUpPage from './LogInPage/SignUpPage';
import ForgetPasswordPage from './LogInPage/ForgetPage';
import NewPassPage from './LogInPage/NewPassPage';
import History from './MenuPage/HistoryPage';
import YourSetPage from './MenuPage/YourSetPage';
function App() { 
  //add use state which has the user object which we will use to pass to other components, initialize to -1 when not logged in, then when
  //loged in we replace it with the user stuff

  return (
    <Fragment>
      <BrowserRouter>
      <GlobalStyles/>
          <Route path ='/Menu' component = {MenuPage}/>
          <Route path ='/YourSet' component = {YourSetPage}/>
          <Route path ='/History' exact component = {History}/>=
          <Route path ='/Landing' exact component = {LandingPage}/>
          <Route path ='/LogIn' exact component = {LogInPage}/>
          <Route path ='/SignUp' exact component = {SignUpPage}/>
          <Route path ='/ForgetPassword' exact component = {ForgetPasswordPage}/>
          <Route path ='/NewPassword' exact component = {NewPassPage}/>
      </BrowserRouter> 
    </Fragment>
  );
}
export default App;
