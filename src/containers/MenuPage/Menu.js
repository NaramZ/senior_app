import React, { Fragment, useState, useRef } from 'react';
import { useOnClickOutside } from '../../hook';
import MenuCards from '../../components/MenuComponent/Card/LayoutCard';
import Navigation from '../../components/MenuComponent/MenuNavBar/NavBar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import Burger from '../../components/Burger';
import Menu from '../../components/Menu';
import YourSet from '../../components/MenuComponent/YourSet/YourSet';

const MenuPage = () => {

    const [open, setOpen] = useState(false); //state of burger false by default
    const node = useRef(); //refrence to open burger
    useOnClickOutside(node, () => setOpen(false)) //react hooks, when click outside menu anywhere it closes menu

    


    return(
        <Fragment>
            <ThemeProvider theme={theme}>
                <Navigation/>
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
                <MenuCards/>
                <YourSet/>
            </ThemeProvider>
        </Fragment>
    );
}

export default MenuPage;