import React, { useRef, Fragment, useEffect, useState } from 'react';
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
import axios from 'axios';


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
  const [expandedId, setExpandedId] = useState(-1);
  const [ChangeId, setChangeId] = useState(-1);
  const handleExpandClick = i => {
    setExpandedId(expandedId === i ? -1 : i);
  };
  const handleColorClick = i => {
    setChangeId(ChangeId === i ? -1 : i);
  };
  const node = useRef();

  useOnClickOutside(node, () => setExpandedId(false))

  const [data, setData] = useState({product: []  })

  useEffect(() => {
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then((data) => {
      setData({ product: data })
    })}, [])
;
 

  return (
    <Fragment>
        <MuiThemeProvider theme ={theme}>
            <div className = "boxGrid">
            {data.product.map(product => (
                <div className={classNames('boxContainer-', product.id ).replace(' ', "")}>
                <Card className={classes.root} key={product.id}>
                <CardMedia
                className={classes.media}
                image={WhiskeyImg}
                title={product.title}
                />
                <CardHeader
                    title={product.title}
                />
                <CardActions >
                    <IconButton 
                        className={clsx(classes.expand, {
                        [classes.expandOpen]: expandedId === product.id,
                        })}
                        onClick={() => handleExpandClick(product.id)}
                        aria-expanded={expandedId === product.id}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                        <Collapse in={expandedId === product.id} timeout="auto" unmountOnExit> 
                            <CardContent>
                            <Typography paragraph>
                                    {product.description}
                            </Typography>
                            <Typography variant="h5">Ingredients:</Typography>
                            <List aria-label="ingredients">
                                <hr/>
                                <ListItem>
                                {product.ingreditents}
                                </ListItem>
                                </List>
                            <Typography align="right" variant="h4" color = "primary">6$</Typography>
                                <IconButton className={clsx(classes.changeColor, {
                                    [classes.changeColorOpen]: ChangeId === product.idi,
                                    })}
                                    onClick={() => handleColorClick(product.id)}
                                    aria-expanded={ChangeId === product.id}
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
