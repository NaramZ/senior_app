import React from 'react';
import Card from './MCard';
import Aux from '../../../hoc/Aux';
import WhiskeyImg from '../../../assets/WhiskeyW.jpg';
// import TequilaImg from '../../../assets/TequilaT.png';
import Grid from '@material-ui/core/Grid';

const CardsLayout = (props) => (
    <Aux>
        <Grid>
            <Grid>
                <Grid>
                    <Card 
                        Image = {WhiskeyImg}/>
                </Grid>
                
            </Grid>
        </Grid>
    </Aux>
)

export default CardsLayout;