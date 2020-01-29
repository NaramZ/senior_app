import React from 'react';
import classes from './App.module.css';
import Aux from '../hoc/Aux';

function App() {

  return (
    <Aux>
    <div className= {classes.test}>
    <button className="collapsible">Open Collapsible</button>
      Old Fashion
    </div>
    <div className= {classes.test}>
      Mohito
    </div>
    </Aux>
    
  );
}

export default App;
