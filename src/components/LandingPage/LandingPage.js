import React from 'react';
import Aux from '../../hoc/Aux';
import LandingNav from './LandingBar'
import AccountCreation from './AcCreation';
function App() { 

    return (
        <Aux>
            <LandingNav/>
            <AccountCreation/>
        </Aux>
    )
}

export default App;