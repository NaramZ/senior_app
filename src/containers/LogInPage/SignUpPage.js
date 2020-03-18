import React from 'react';
import ParticlesBg from "particles-bg";
import Aux from '../../hoc/Aux';
import SignUp from '../../components/LogIn/SignUp';


const LogInPage = () => {
    
    return(
        <Aux>
            <SignUp/>
            <ParticlesBg type="cobweb"  bg={true}/>
        </Aux>


    )
}

export default LogInPage;