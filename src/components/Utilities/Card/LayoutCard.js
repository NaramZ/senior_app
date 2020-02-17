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
                        Image1 = {WhiskeyImg}
                        ItemTitle1 = 'Whiskey'/>
                </Grid>
                <Grid>
                    <Card
                        Image2 = {TequilaImg}
                        ItemTitle2 = 'Tequila'/>
                </Grid>
                <Grid>
                    <Card
                        Image3 = {MohitoImg}
                        ItemTitle3 = 'Mohito'/>
                </Grid>
        </Grid>
    </Aux>
)

export default CardsLayout;