import React from 'react';
import Aux from '../../hoc/Aux';
import LandingNav from '../../components/LandingPage/LandingBar';
import PgOne from '../../components/LandingPage/Pg1';
import PgTwo from '../../components/LandingPage/Pg2';
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