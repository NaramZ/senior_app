import React from 'react';
import classes from './App.module.css';
import Aux from '../hoc/Aux';
import Image from 'react-bootstrap/Image'
import wImage from '../assets/Whiskey.jpg';
import tImage from '../assets/Tequila.png';
import Navigation from '../components/NavBar/NavBar';
import FormFinal from '../components/Form/Form';

function App() {

  return (
    <Aux>
      <Navigation/>
      <navigationbar></navigationbar>
      <div className={classes.drinkbox}>
        <Image src={wImage} rounded className={classes.img}/> Whiskey </div>
        <div className={classes.drinkbox}>
        <Image src={tImage} rounded className={classes.img}/> Tequila  </div>
    </Aux>
    
  );
}

export default App;
