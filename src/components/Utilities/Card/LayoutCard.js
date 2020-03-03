import React from 'react';
import Card from './MCard';
import Aux from '../../../hoc/Aux';
import WhiskeyImg from '../../../assets/WhiskeyW.jpg';
import TequilaImg from '../../../assets/TequilaT.png';
import MohitoImg from '../../../assets/mojito.jpg';
import { StyledCard } from './Card.styled';

const CardsLayout = (props) => (
    <Aux>
        <StyledCard>
            <ul>
                <li>
                    <Card
                        Image = {WhiskeyImg}
                        ItemTitle = 'Old Fashioned'
                        Rating = '&emsp;4.6 '
                        Category = ' · Whiskey · Drinks · 8$'
                        />
                </li>
                <li>
                    <Card
                        Image = {TequilaImg}
                        ItemTitle = 'Tequila Shot'
                        Rating = '&emsp;4.8'
                        Category = ' · Tequila · Drinks · 8$'/>
                </li>
                <li>
                    <Card
                        Image = {MohitoImg}
                        ItemTitle = 'Mojito'
                        Rating = '&emsp;4.9'
                        Category = ' · Cocktail · Drinks · 10$'/>
                </li>
            </ul>
        </StyledCard>    
    </Aux>
)

export default CardsLayout;