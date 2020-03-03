import React from 'react';
import Aux from '../../hoc/Aux';
import LandingNav from './LandingBar'
import PgOne from './Pg1';
import PgTwo from './Pg2';
function App() { 

    return (
        <Aux>
            <LandingNav/>
            <PgOne/>
            <PgTwo/>
        </Aux>
    )
}

export default App;