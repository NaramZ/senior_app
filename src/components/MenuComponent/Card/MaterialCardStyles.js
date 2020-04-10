import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: "24rem",
        fontFamily: 'Roboto Condensed',
        justifyContent: "center",
        flexWrap: "wrap",
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      paper:{
          borderRadius: "24px",
      },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,

    }),
  },
  expandOpen: {
    transform: 'rotate(-90deg)',

  },
  changeColor:{
    },
  changeColorOpen:{
    color: "#FB6D3A",
    
  },
}));

export default useStyles;