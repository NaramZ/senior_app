import React from 'react';
import Aux from '../../../hoc/Aux';
import {StyledPgTwo} from './PageTwo.styled';
import OurMissionImg from '../../../assets/LandingImage.png';
const PageTwo = () => {
    return(
        //HAVE TO CHANGE IMAGE
        <Aux>
            <StyledPgTwo>
                    <div>
                        <div>
                            <img src ={OurMissionImg} alt = "First Land"/>
                        </div>

                        <div>
                            <h1>Our Mission</h1>
                        </div>
                        <div>
                            <hr/>
                            <h5>
                                We believe in bringing you a better Drinking experience, one that no one but you controls. Why wait for others
                                when at a click of a button you can get whatever you desire?
                            </h5>
                        </div>
                        </div>
            </StyledPgTwo>
        </Aux>
    )

}

export default PageTwo;