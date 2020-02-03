import React from 'react';
import classes from './App.module.css';
import Aux from '../hoc/Aux';
import Image from 'react-bootstrap/Image'
import imagge from '../assets/Whiskey.jpg';
import Navigation from '../components/NavBar/NavBar';

function App() {

  return (
    <Aux>
      <Navigation/>
      <navigationbar></navigationbar>
      <div className={classes.drinkbox}>
        <Image src={imagge} rounded className={classes.img}/> Whiskey </div>
        <div className={classes.drinkbox}>
        <Image src={imagge} rounded className={classes.img}/> Tequila  </div>
    </Aux>
    
  );
}

export default App;
