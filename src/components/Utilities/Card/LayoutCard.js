import React from 'react';
import RecipeReviewCard from './Card';
import Aux from '../../../hoc/Aux';
import WhiskeyImg from '../../../assets/Whiskey.jpg';
import TequilaImg from '../../../assets/Tequila.png';
import Grid from '@material-ui/core/Grid';

const CardsLayout = (props) => (
    <Aux>
        <Grid container spacing={3}>
            <Grid container
                direction="row"
                justify="center"
                item xs={3}>
                <RecipeReviewCard 
                    mediaimage = {WhiskeyImg} 
                    title = 'Whiskey'
                    titledescription = 'Whiskey Drink'
                    description = 'A whiskey so fine, you will wish it never ends'/>
            </Grid>

            <Grid container
                direction="row"
                justify="center"
                item xs={3}>
                <RecipeReviewCard 
                    mediaimage = {TequilaImg}
                    title = 'Tequila'
                    titledescription = 'Tequila Drink'
                    description = 'A tequila so fine, you will wish it never ends'/>
            </Grid>
            
        </Grid>
    </Aux>
    
)

export default CardsLayout;