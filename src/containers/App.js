import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hook';
import Aux from '../hoc/Aux';
import MenuPage from './MenuPage/Menu';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../Global';
import { theme } from '../theme';
import Burger from '../components/Burger';
import Menu from '../components/Menu';
import Navigation from '../components/NavBar';
import {BrowserRouter} from 'react-router-dom';
function App() { 

  const [open, setOpen] = useState(false); //state of burger false by default

  const node = useRef(); //refrence to open burger

  useOnClickOutside(node, () => setOpen(false)) //react hooks, when click outside menu anywhere it closes menu

  return (
    <Aux>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles/>
          <Navigation/>
          <MenuPage/>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </Aux>
  );
}
export default App;
