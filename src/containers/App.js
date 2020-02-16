import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hook';
import Aux from '../hoc/Aux';
import CardLayout from '../components/Utilities/Card/LayoutCard';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../Global';
import { theme } from '../theme';
import Burger from '../components/Burger';
import Menu from '../components/Menu';



function App() { 

  const [open, setOpen] = useState(false); //state of burger false by default

  const node = useRef(); //refrence to open burger

  useOnClickOutside(node, () => setOpen(false)) //react hooks, when click outside menu anywhere it closes menu

  return (
    <Aux>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <CardLayout></CardLayout>

        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </ThemeProvider>
      
    </Aux>
  );
}
export default App;
