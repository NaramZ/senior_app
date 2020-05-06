import React, { Fragment, useState, useRef } from 'react';
import { useOnClickOutside } from '../../hook';
import History from '../../components/MenuComponent/History/OrderHistory';
import Navigation from '../../components/MenuComponent/MenuNavBar/NavBar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import Burger from '../../components/Burger';
import CheckoutMenu from '../../components/Checkout';

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
                    <CheckoutMenu open={open} setOpen={setOpen} />
                </div>
                <History/>
            </ThemeProvider>
        </Fragment>
    );
}

export default MenuPage;