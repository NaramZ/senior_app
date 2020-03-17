import React from 'react';
import Aux from '../hoc/Aux';
import MenuPage from './MenuPage/Menu';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import {GlobalStyles} from '../Global';
function App() { 
  
  return (
    <Aux>
      <BrowserRouter>
      <GlobalStyles/>
          <Route path ='/Menu' component = {MenuPage}/>
          <Route path ='/Landing' exact component = {LandingPage}/>
      </BrowserRouter> 
    </Aux>
  );
}
export default App;
