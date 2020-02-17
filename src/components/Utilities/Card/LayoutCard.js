import React from 'react';
import Card from './MCard';
import Aux from '../../../hoc/Aux';
import WhiskeyImg from '../../../assets/WhiskeyW.jpg';
import TequilaImg from '../../../assets/TequilaT.png';
import MohitoImg from '../../../assets/mohito.jpg';
import Grid from '@material-ui/core/Grid';

const CardsLayout = (props) => (
    <Aux>
        <Grid>
                <Grid>
                    <Card
                        Image1 = {WhiskeyImg}/>
                </Grid>
                <Grid>
                    <Card
                        Image2 = {TequilaImg}/>
                </Grid>
                <Grid>
                    <Card
                        Image3 = {MohitoImg}/>
                </Grid>
        </Grid>
    </Aux>
)

export default CardsLayout;