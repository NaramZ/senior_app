import React from 'react';
import Aux from './../../../hoc/Aux';
import {StyledPgFour} from './PgFour.styled';
import MohitoLanding from '../../../assets/MohitoLanding.png';
import MaiTai from '../../../assets/MaiTai.png';
import OldFashioned from '../../../assets/OldFashioned.png';
import '../../../Grid.scss';

function PgFour() {
    return (
    <Aux>
        <StyledPgFour>
            <div className = "LandingGrid">
                <div className="LandingContainerFour-1">
                    <h1>Your Set</h1>
                </div>
                <div className="LandingContainerFour-2">
                    <hr/>
                    <h5>Your own Personal set of drinks across all Pubs at your reach at any time</h5>
                </div>
                <div className="LandingContainerFour-3">
                    <div className="DivTopLeft">
                        <div>
                            <img src = {MaiTai} alt = 'MaiTai'/>
                            <h2>Mai Tai</h2>
                            <h5><b>Ingredients:</b> 
                                <li>
                                    Rum
                                </li>
                                <li>
                                    More Rum
                                </li>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="LandingContainerFour-4">
                    <div className="DivTopRight">
                        <div>
                            <img src = {MohitoLanding} alt = "Mohito Land"/>
                            <h2>Mohito</h2>
                            <h5><b>Ingredients:</b> 
                                <li>
                                     Rum
                                </li>
                                <li>
                                    More Rum
                                </li>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="LandingContainerFour-5">
                    <div className="DivBottomLeft">
                        <div>
                            <img src = {OldFashioned} alt = "Old Fashioned"/>
                            <h2>Old Fashioned</h2>
                            <h5><b>Ingredients:</b>
                                <li>
                                     Whiskey
                                </li>
                                <li>
                                    Burbon
                                </li>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </StyledPgFour>
    </Aux>
    )
};

export default PgFour;
