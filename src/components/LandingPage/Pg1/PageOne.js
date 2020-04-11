import React, {Fragment} from 'react';
import LandingImg from '../../../assets/LandingImage.png';
import '../../../Grid.scss';

const PgOne = () => {
    return (
        <Fragment>
                    <div className = "LandingGrid">
                        <div className = "LandingContainerOne-1">
                            <img src ={LandingImg} alt = "First Land"/>
                        </div>
                        <div className = "LandingContainerOne-2">
                            <h1>Your Drinking Experience</h1>
                            
                        </div>
                        <div className = "LandingContainerOne-3">
                            <hr/>
                            <h4>
                                <b>Drinking</b> is like life, sometimes it's fun and sometimes it's dull, but alcohol makes you 
                                forget the dull times ever happened.
                            </h4>
                        </div>
                    </div>
        </Fragment>
    )
}

export default PgOne;