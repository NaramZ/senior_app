import React from 'react';
import Aux from '../../../hoc/Aux';
import { StyledAc } from './AcCreation.styled';
const AcCreation = () => {
    return (
        <Aux>
            <StyledAc>
                <ul>
                    <li>
                        <a href= '#Login'>
                            <h5>Log in</h5>
                        </a>
                    </li>
                    <li>
                        <a href= '#SignUp'>
                            <h5>SignUp</h5>
                        </a>
                    </li>
                </ul>
            </StyledAc>
        </Aux>
    )
}
 


export default AcCreation;