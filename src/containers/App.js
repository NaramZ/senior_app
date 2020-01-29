import React from 'react';
import classes from './App.module.css';
import Aux from '../hoc/Aux';
import Button from 'react-bootstrap/Button';

function App() {

  return (
    <Aux>
    <Button variant="light" className= {classes.test}>
      Old Fashion
    </Button>
    <div className= {classes.test}>
      Mohito
    </div>
    

  <Button variant="light">Light</Button>
  <Button variant="dark">Dark</Button>


    </Aux>
    
  );
}

export default App;
