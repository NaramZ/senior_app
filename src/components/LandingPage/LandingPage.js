import React from 'react';
import Aux from '../../hoc/Aux';
import LandingNav from './LandingBar'
import PgOne from './Body/PageOne';

function App() { 

    return (
        <Aux>
            <LandingNav/>
            <PgOne/>
        </Aux>
    )
}

export default App;