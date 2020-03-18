import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hook';
import Aux from '../../hoc/Aux';
import MenuCards from '../../components/Card/LayoutCard';
import Navigation from '../../components/MenuNavBar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import Burger from '../../components/Burger';
import Menu from '../../components/Menu';
import ExpCard from '../../components/ExpandedCard/ExpCard';
const MenuPage = () => {

    const [open, setOpen] = useState(false); //state of burger false by default
    const [openCard, setOpenCard] = useState(false); //state of burger false by default
    const node = useRef(); //refrence to open burger
    const nodeExp = useRef();
    useOnClickOutside(node, () => setOpen(false)) //react hooks, when click outside menu anywhere it closes menu
    useOnClickOutside(nodeExp, () => setOpenCard(false)) //react hooks, when click outside menu anywhere it closes menu

    return(
        <Aux>
            <ThemeProvider theme={theme}>
                <Navigation/>
                {/* <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
                <div ref = {nodeExp}>
                    <ExpCard openCard = {openCard} setOpenCard={setOpenCard}/>
                    <MenuCards openCard = {openCard} setOpenCard={setOpenCard}/>
                </div> */}
                <ExpCard/>
            </ThemeProvider>
        </Aux>
    );
}

export default MenuPage;