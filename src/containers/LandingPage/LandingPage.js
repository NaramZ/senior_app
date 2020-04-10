import React, {Fragment} from 'react';
import LandingNav from '../../components/LandingPage/LandingBar/LadningBar';
import PgOne from '../../components/LandingPage/Pg1/PageOne';
import PgTwo from '../../components/LandingPage/Pg2/PageTwo';
import PgThree from '../../components/LandingPage/Pg3';
import PgFour from '../../components/LandingPage/PgFour';
function App() { 

    return (
        <Fragment>
            <LandingNav/>
            <PgOne/>
            <PgTwo/>
            <PgThree/>
            <PgFour/>
        </Fragment>
    )
}

export default App;