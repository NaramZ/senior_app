import React from 'react';
import Card from './MCard';
import Aux from '../../hoc/Aux';
import { FiStar } from "react-icons/fi";
import WhiskeyImg from '../../assets/WhiskeyW.jpg';
import TequilaImg from '../../assets/TequilaT.png';
import MohitoImg from '../../assets/mojito.jpg';
import '../../Grid.scss';
import {StyledCard} from './LayoutCard.styled'
import { bool, func } from 'prop-types';

const CardsLayout = ({ openCard, setOpenCard }) => {
    
    return (
        <Aux>
            <StyledCard>
            <div className = "boxGrid">
                <div className="boxContainer-1" openCard = {openCard} onClick={() => setOpenCard(!openCard)}>
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
                <div className="boxContainer-2" openCard = {openCard} onClick={() => setOpenCard(!openCard)}>
                    <div className="cardImage">
                    <Card Image = {TequilaImg}/>
                    </div> 
                    <div className="cardText">
                            <Card 
                            ItemTitle = 'Tequila Shot'
                            Icon = {<FiStar/>}
                            Rating = '&emsp;4.8'
                            Category = ' · Tequila · Drinks · 8$'/>
                    </div>
                </div>    
                <div className="boxContainer-3">
                    <div className="cardImage">
                    <Card Image = {MohitoImg}/>
                    </div> 
                    <div className="cardText">
                            <Card 
                            ItemTitle = 'Mojito'
                            Icon = {<FiStar/>}
                            Rating = '&emsp;4.9'
                            Category = ' · Cocktail · Drinks · 10$'/>
                    </div>
                </div>    
                <div className="boxContainer-4">
                    <div className="cardImage">
                    <Card Image = {MohitoImg}/>
                    </div> 
                    <div className="cardText">
                            <Card 
                            ItemTitle = 'Mojito'
                            Icon = {<FiStar/>}
                            Rating = '&emsp;4.9'
                            Category = ' · Cocktail · Drinks · 10$'/>
                    </div>
                </div>
                <div className="boxContainer-5">
                    <div className="cardImage">
                    <Card Image = {MohitoImg}/>
                    </div> 
                    <div className="cardText">
                            <Card 
                            ItemTitle = 'Mojito'
                            Icon = {<FiStar/>}
                            Rating = '&emsp;4.9'
                            Category = ' · Cocktail · Drinks · 10$'/>
                    </div>
                </div>
                <div className="boxContainer-6">
                    <div className="cardImage">
                    <Card Image = {MohitoImg}/>
                    </div> 
                    <div className="cardText">
                            <Card 
                            ItemTitle = 'Mojito'
                            Icon = {<FiStar/>}
                            Rating = '&emsp;4.9'
                            Category = ' · Cocktail · Drinks · 10$'/>
                    </div>
                </div>
            </div>
        </StyledCard>
        </Aux>
    )
}
CardsLayout.propTypes = {
    openCard: bool.isRequired,
    setOpenCard: func.isRequired,
};

export default CardsLayout;