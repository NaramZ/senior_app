import React from 'react';
import Aux from '../../hoc/Aux';
import LandingNav from '../../components/LandingPage/LandingBar';
import PgOne from '../../components/LandingPage/Pg1';
import PgTwo from '../../components/LandingPage/Pg2';
import PgThree from '../../components/LandingPage/Pg3';
import PgFour from '../../components/LandingPage/PgFour';
function App() { 

    return (
        <Aux>
            <LandingNav/>
            <PgTwo/>
        </Aux>
    )
}

export default App;