import React from 'react';
import Aux from '../hoc/Aux';
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
    <Aux>
      <BrowserRouter>
      <GlobalStyles/>
          <Route path ='/Menu' component = {MenuPage}/>
          <Route path ='/Landing' exact component = {LandingPage}/>
          <Route path ='/LogIn' exact component = {LogInPage}/>
          <Route path ='/SignUp' exact component = {SignUpPage}/>
      </BrowserRouter> 
    </Aux>
  );
}
export default App;
