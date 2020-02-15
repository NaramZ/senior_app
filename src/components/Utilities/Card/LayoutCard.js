import React from 'react';
import RecipeReviewCard from './Card';
import Aux from '../../../hoc/Aux';
import WhiskeyImg from '../../../assets/Whiskey.jpg';
import TequilaImg from '../../../assets/Tequila.png';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       height: 140,
//       width: 100,
//     },
//     control: {
//       padding: theme.spacing(2),
//     },
//   }));
//   const classes = useStyles();
//   const [spacing] = React.useState(2);

const CardsLayout = (props) => (
    <Aux>
        <Grid container spacing={2}>
            <Grid item xs= {12}>
                <Grid container
                direction="row"
                justify="center"
                item xs={2}>
                    <RecipeReviewCard 
                        mediaimage = {WhiskeyImg} 
                        title = 'Whiskey'
                        titledescription = 'Whiskey Drink'
                        description = 'A whiskey so fine, you will wish it never ends'/>
                </Grid>
        
                <Grid container 
                direction="row"
                justify="center"
                item xs={2}>
                    <RecipeReviewCard
                        mediaimage = {TequilaImg}
                        title = 'Tequila'
                        titledescription = 'Tequila Drink'
                        description = 'A tequila so fine, you will wish it never ends'/>
                </Grid>
        </Grid>
    </Grid>
    </Aux>
    
)

export default CardsLayout;