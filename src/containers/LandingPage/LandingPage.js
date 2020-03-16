import React from 'react';
import Aux from '../../hoc/Aux';
import LandingNav from '../../components/LandingPage/LandingBar/LadningBar';
import PgOne from '../../components/LandingPage/Pg1/PageOne';
import PgTwo from '../../components/LandingPage/Pg2/PageTwo';
import PgThree from '../../components/LandingPage/Pg3';
import PgFour from '../../components/LandingPage/PgFour';
function App() { 

    return (
        <Aux>
            <LandingNav/>
            <PgFour/>
        </Aux>
    )
}

export default App;