import React from 'react';
import classes from './App.module.css';
import Aux from '../hoc/Aux';
import Image from 'react-bootstrap/Image'
import imagge from '../assets/Whiskey.jpg';

function App() {

  return (
    <Aux>
      <div className={classes.test}>
        <Image src={imagge} alt="Smiley face" rounded className={classes.img}/>
      Whiskey
      </div>
    </Aux>
    
  );
}

export default App;
