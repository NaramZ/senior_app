import React from 'react';
import RecipeReviewCard from './Card';
import Aux from '../../../hoc/Aux';
import WhiskeyImg from '../../../assets/Whiskey.jpg';
import Tequilaimg from '../../../assets/Tequila.png';

const CardLayout = (props) => (
    <Aux>
    <RecipeReviewCard 
    mediaimage = {WhiskeyImg} 
    title = 'Whiskey'
    titledescription = 'Whiskey Drink'
    description = 'A whiskey so fine, you will wish it never ends'/>

    <RecipeReviewCard 
    mediaimage = {Tequilaimg}
    title = 'Tequila'
    titledescription = 'Tequila Drink'
    description = 'A tequila so fine, you will wish it never ends'/>
    </Aux>
)

export default CardLayout;