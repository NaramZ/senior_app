import React from 'react';
import Card from './MCard';
import Aux from '../../../hoc/Aux';
import WhiskeyImg from '../../../assets/WhiskeyW.jpg';
import TequilaImg from '../../../assets/TequilaT.png';
import MohitoImg from '../../../assets/mojito.jpg';
import Grid from '@material-ui/core/Grid';

const CardsLayout = (props) => (
    <Aux>
        <Grid>
                <Grid>
                    <Card
                        Image1 = {WhiskeyImg}
                        ItemTitle1 = 'Old Fashioned'
                        Rating1 = '4.6'
                        Category1 = 'Whiskey · Drinks · 8$'/>
                </Grid>
                <Grid>
                    <Card
                        Image2 = {TequilaImg}
                        ItemTitle2 = 'Tequila Shot'
                        Rating2 = '4.8'
                        Category2 = 'Tequila · Drinks · 8$'/>
                </Grid>
                <Grid>
                    <Card
                        Image3 = {MohitoImg}
                        ItemTitle3 = 'Mojito'
                        Rating3 = '4.9'
                        Category3 = 'Cocktail · Drinks · 10$'/>
                </Grid>
        </Grid>
    </Aux>
)

export default CardsLayout;