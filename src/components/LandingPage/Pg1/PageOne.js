import React from 'react';
import Aux from '../../../hoc/Aux';
import LandingImg from '../../../assets/LandingImage.png';
import '../../../Grid.scss';

const PgOne = () => {
    return (
        <Aux>
                    <div className = "LandingGrid">
                        <div className = "LandingContainerOne-1">
                            <img src ={LandingImg} alt = "First Land"/>
                        </div>
                        <div className = "LandingContainerOne-2">
                            <h1>Your Drinking Experience</h1>
                            
                        </div>
                        <div className = "LandingContainerOne-3">
                            <hr/>
                            <h5>
                                <b>Drinking</b> is like life, sometimes it's fun and sometimes it's dull, but alcohol makes you 
                                forget the dull times ever happened.
                            </h5>
                        </div>
                    </div>
        </Aux>
    )
}

export default PgOne;