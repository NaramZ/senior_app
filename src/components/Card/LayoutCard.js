import React, { useRef, Fragment } from 'react';
import { useOnClickOutside } from '../../hook';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import WhiskeyImg from '../../assets/WhiskeyW.jpg';
import Card from '@material-ui/core/Card';
import '../../Grid.scss';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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

const theme = createMuiTheme({
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
        MuiCollapse:{
            root:{
                transition:{
                collapsedHeight:'20px',
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

// ----------------------------------------




const MenuCard = ({ itineraries, activities }) => {
  const classes = useStyles();
  const [expandedId, setExpandedId] = React.useState(-1);
  const [ChangeId, setChangeId] = React.useState(-1);
  const MenuPerCard = [{ _id: "1" },{ _id: "2" } ];

  const handleExpandClick = i => {
    setExpandedId(expandedId === i ? -1 : i);
  };
  const handleColorClick = i => {
    setChangeId(ChangeId === i ? -1 : i);
  };
  const node = useRef();

  useOnClickOutside(node, () => setExpandedId(false))

  return (
    <Fragment>
        <MuiThemeProvider theme ={theme}>
            <div className = "boxGrid">
            {MenuPerCard.map((itinerary, i) => (
                <div className={classNames('boxContainer-', i+1 ).replace(' ', "")}>
                <Card className={classes.root} key={itinerary._id}>
                <CardMedia
                className={classes.media}
                image={WhiskeyImg}
                title="Old Fashioned"
                />
                <CardHeader disableSpacing
                    title="Old Fashioned"
                />
                <CardActions >
                    <IconButton 
                        className={clsx(classes.expand, {
                        [classes.expandOpen]: expandedId === i,
                        })}
                        onClick={() => handleExpandClick(i)}
                        aria-expanded={expandedId === i}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                        <Collapse in={expandedId === i} timeout="auto" unmountOnExit> 
                            <CardContent>
                            <Typography paragraph>
                                    The old fashioned is a cocktail traditionally 
                                    served in an old fashioned glass (also known as rocks glass), 
                                    which predated the cocktail.
                            </Typography>
                            <Typography variant="h5">Ingredients:</Typography>
                            <List aria-label="ingredients">
                                <hr/>
                                <ListItem>
                                    <ListItemText primary="White Rum" />
                                    <ListItemText primary="Whisky" />
                                    <ListItemText primary="Sugar" />
                                </ListItem>
                                </List>
                            <Typography align="right" variant="h4" color = "primary">6$</Typography>
                                <IconButton className={clsx(classes.changeColor, {
                                    [classes.changeColorOpen]: ChangeId === i,
                                    })}
                                    onClick={() => handleColorClick(i)}
                                    aria-expanded={ChangeId === i}
                                    aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>

                                <IconButton
                                    aria-label="add to tab"
                                    >
                                <AddIcon />
                                </IconButton>
                            </CardContent>
                        </Collapse>
                    
                    </Card>
                </div>
            ))}
            </div>
            </MuiThemeProvider>
            
            </Fragment>
          );
        };

export default MenuCard;
