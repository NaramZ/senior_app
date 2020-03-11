import React from 'react';
import Aux from './../../../hoc/Aux';
import {StyledPgFour} from './PgFour.styled';
import MohitoLanding from '../../../assets/MohitoLanding.png';
import MaiTai from '../../../assets/MaiTai.png';
import OldFashioned from '../../../assets/OldFashioned.png';
function PgFour() {
    return (
    <Aux>
        <StyledPgFour>
            <ul>
                <li>
                    <h1><b>Your Set</b></h1>
                </li>
                <li>
                    <hr/>
                    <h5>Your own Personal set of drinks across all Pubs at your reach at any time</h5>
                </li>
                <li>
                    <div> {/*Resolution: 320x320px */}
                        <img src = {MaiTai} alt = 'MaiTai'/>
                        <h2><b>Mai Tai</b></h2>
                        <h5><b>Ingredients:</b> Alco</h5>
                    </div>
                </li>
                <li>
                     <div> {/*Resolution: 320x650px */}
                        <img src = {MohitoLanding} alt = "Mohito Land"/>
                        <h2><b>Mohito</b></h2>
                        <h5><b>Ingredients:</b> White Rum </h5>
                    </div>
                </li>
                <li>
                    <div>
                        <img src = {OldFashioned} alt = "old Fashioned" />
                        <h2><b>Old Fashioned</b></h2>
                        <h5><b>Ingredients:</b> Whiskey </h5>
                    </div>
                </li>
            </ul>
        </StyledPgFour>
    </Aux>
    )
};

export default PgFour;
