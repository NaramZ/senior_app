import React from 'react';
import Aux from '../../../hoc/Aux';
import OurMissionImg from '../../../assets/LandingImage.png';
const PageTwo = () => {
    return(
        //HAVE TO CHANGE IMAGE
        <Aux>
                    <div className = "LandingGrid">
                        <div className = "LandingContainerTwo-1">
                            <img src ={OurMissionImg} alt = "First Land"/>
                        </div>

                        <div className = "LandingContainerTwo-2">
                            <h1>Our Mission</h1>
                        </div>
                        <div className = "LandingContainerTwo-3">
                            <hr/>
                            <h5>
                                We believe in bringing you a better Drinking experience, one that no one but you controls. Why wait for others
                                when at a click of a button you can get whatever you desire?
                            </h5>
                        </div>
                        </div>
        </Aux>
    )

}

export default PageTwo;