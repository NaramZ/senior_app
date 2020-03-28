import React from 'react';
import Aux from '../../hoc/Aux';
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

const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: "24rem",
        fontFamily: 'Roboto Condensed',
      },
      
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      paper:{
          borderRadius: "24px",
      },
  expand: {
    transform: 'rotate(-90deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(-180deg)',
  },
  
  
}));
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FCD561'
        }
    },
    overrides: {
        MuiIconButton:{
            root:{
            padding: '0',
            
        },
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Aux>
        <MuiThemeProvider theme={theme}>
            <div className = "boxGrid">
                <div className="boxContainer-1">
                <Card className={classes.root} >
                
                <CardMedia 
                className={classes.media}
                image={WhiskeyImg}
                title="Old Fashioned"
                />
                <CardHeader disableSpacing
                    title="Old Fashioned"
                />
                <CardActions>
                    <IconButton
                        className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit> 
                            <CardContent>
                                
                            <Typography paragraph>
                                    The old fashioned is a cocktail traditionally 
                                    served in an old fashioned glass (also known as rocks glass), 
                                    which predated the cocktail.
                                </Typography>
                                <Typography variant="h4" alignRight  color="primary">6$:</Typography>
                            <Typography variant="h5">Ingredients:</Typography>
                                    <hr/>
                                        <li>Whiskey</li>
                                    <p>
                                        <li>Muddling Sugar</li>
                                    </p>
                                    <p>
                                        <li>Citrus Rind</li>
                                    </p>
                            <div>   
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <IconButton justifySelf = "right" aria-label="add to favorites">
                                <AddIcon />
                                </IconButton>
                            </div>
        </CardContent>
      </Collapse>
                    
                    </Card>
                </div>
            </div>
        </MuiThemeProvider>
    </Aux>
  );
}
