import React from 'react';
import Card from './MCard';
import Aux from '../../../hoc/Aux';
import { FiStar } from "react-icons/fi";
import WhiskeyImg from '../../../assets/WhiskeyW.jpg';
// import TequilaImg from '../../../assets/TequilaT.png';
// import MohitoImg from '../../../assets/mojito.jpg';
// import { StyledCard } from './Card.styled';
import './Grid.scss';

const CardsLayout = (props) => (
    <Aux>
            <div className = "boxGrid">
                <div className="boxContainer">
                    <div className="cardImage">
                    <Card Image = {WhiskeyImg}/>
                    </div> 
                    <div className="cardText">
                            <Card 
                            ItemTitle = 'Old Fashioned'
                            Icon = {<FiStar/>}
                            Rating = '&emsp;4.6 '
                            Category = ' · Whiskey · Drinks · 8$'/>
                    </div>
                </div>     
            </div>

        {/* <div className='boxContainer'>
                <li className = "cardTitleBox">
                    <Card 
                        Image = {WhiskeyImg}
                        ItemTitle = 'Old Fashioned'
                        Rating = '&emsp;4.6 '
                        Category = ' · Whiskey · Drinks · 8$'
                        />
                </li>
                <li className = "cardTitleBox"> 
                    <Card 
                        Image = {TequilaImg}
                        ItemTitle = 'Tequila Shot'
                        Rating = '&emsp;4.8'
                        Category = ' · Tequila · Drinks · 8$'/>
                </li>
                <li className = "cardTitleBox">
                    <Card
                        Image = {MohitoImg}
                        ItemTitle = 'Mojito'
                        Rating = '&emsp;4.9'
                        Category = ' · Cocktail · Drinks · 10$'/>
                </li> */}
    </Aux>
)

export default CardsLayout;