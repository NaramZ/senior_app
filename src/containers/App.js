import React from 'react';
import classes from './App.module.css'
import Aux from '../hoc/Aux';
import Navigation from '../components/NavBar/NavBar';
import CardLayout from '../components/Utilities/Card/LayoutCard';
function App() {

  return (
    <Aux>
      <Navigation/>
      <CardLayout/>
    </Aux>
    
  );
}

export default App;
