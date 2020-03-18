import React from 'react';
import ParticlesBg from "particles-bg";
import Aux from '../../hoc/Aux';
import LogIn from '../../components/LogIn/LogIn';


const LogInPage = () => {
    
    return(
        <Aux>
            <LogIn/>
            <ParticlesBg type="cobweb"  bg={true}/>
        </Aux>


    )
}

export default LogInPage;