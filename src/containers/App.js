import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hook';
import Aux from '../hoc/Aux';
import Navigation from '../components/NavBar/NavBar';
import CardsLayout from '../components/Utilities/Card/LayoutCard';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../Global';
import { theme } from '../theme';
import Burger from '../components/Burger';
import Menu from '../components/Menu';



function App() { 
  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false))
  return (
    
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Aux>
          <Navigation></Navigation>
          
      <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
        </Aux>
      {/*<CardsLayout/> */}
    <div ref={node}>
    <Burger open={open} setOpen={setOpen} />
    <Menu open={open} setOpen={setOpen} />
    </div>
    </ThemeProvider>
  );
}
export default App;
