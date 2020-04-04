import React, { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from '../../hook';
import Aux from '../../hoc/Aux';
import MenuCards from '../../components/Card/LayoutCard';
import Navigation from '../../components/MenuNavBar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import Burger from '../../components/Burger';
import Menu from '../../components/Menu';
import axios from 'axios';

const MenuPage = () => {

    const [open, setOpen] = useState(false); //state of burger false by default
    const node = useRef(); //refrence to open burger
    useOnClickOutside(node, () => setOpen(false)) //react hooks, when click outside menu anywhere it closes menu

    const [data, setData] = useState({product: []  })

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            "http://localhost:3000/products",
          );
          setData(result.data);
        };
        fetchData();
      }, []);


    return(
        <Aux>
            <ThemeProvider theme={theme}>
                <Navigation/>
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div >
                    <MenuCards data = {data}/>
            </ThemeProvider>
        </Aux>
    );
}

export default MenuPage;