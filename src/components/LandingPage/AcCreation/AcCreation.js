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
                            <h4>Log in</h4>
                        </a>
                    </li>
                    <li>
                        <a href= '#SignUp'>
                            <h4>SignUp</h4>
                        </a>
                    </li>
                </ul>
            </StyledAc>
        </Aux>
    )
}
 


export default AcCreation;