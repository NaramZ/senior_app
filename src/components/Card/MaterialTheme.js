import {createMuiTheme } from '@material-ui/core/styles';


const CardTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#FCD561'
        },
        secondary:{
            main: '#FB6D3A'
        },
    },
    overrides: {
        MuiIconButton:{
            root: {
                "&:last-child": {
                  padding: '0'
                }
              }
    },
        MuiCardActions:{
            root:{
                display: 'inline-block',
                marginLeft: '190px',
                padding: '0',
                
            },
        },
      MuiCardHeader: {
        root: {
          padding: '16px 0 16px 16px',
          display: "inline-block",
        },
      },
    },
  });

  const BottomActionButtons = createMuiTheme({
    overrides: {
      MuiIconButton:{
        root: {
          marginLeft: '250px',
            "&:last-child": {
              padding: '0',
            }
          }
},
    MuiCardActions:{
        root:{
            display: 'inline-block',
            padding: '0',
            
        },
    },
  }
  });

  export {CardTheme, BottomActionButtons};