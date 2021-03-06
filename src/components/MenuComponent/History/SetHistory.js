import React, { Fragment, useEffect, useState } from 'react';
import ProductServices from '../../Services/ProductServices';
import HistoryServices from '../../Services/HistoryServices';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import '../../../Grid.scss';
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
import { MuiThemeProvider} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {CardTheme} from '../../../MaterialTheme';
import useStyles from '../Card/MaterialCardStyles';
import OrderService from '../../Services/OrderServices';


const History = () => {
  //Handle Styles
  const classes = useStyles();
//Handle Expanding Card
  const [expandedId, setExpandedId] = useState(-1);
  const [ChangeId, setChangeId] = useState(-1);
  const handleExpandClick = i => {
    setExpandedId(expandedId === i ? -1 : i);
  };
  const handleColorClick = i => {
    setChangeId(ChangeId === i ? -1 : i);
  };
  const [order, setOrder] = useState({productId: []});
  const [newOrder, setNewOrder] = useState(-1);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const newArray = []
    HistoryServices.getHistoryByUserId(1)
      .then(response => {
        response[0].productId.map(productId => (
          ProductServices
            .getProductsByProductId(productId)
            .then(response => {
              newArray.push(response)
            }
            ).then(
              setHistory(newArray)
            )
        ))
      })
  }, []) //TODO: Fix multiple Hello there calls
  
  const addToOrder = (id)  => {
    console.log(order)
    // TODO: look into refactoring
    const orderObject = {
      ...order,
      productId: order.productId.concat(id)
    }
    OrderService
      .createOrders(orderObject)
        .then(returnedObject => {
          setOrder(returnedObject)
          setNewOrder(returnedObject.id)
      })
  }

const updateOrder = (id) => {
  const updatedOrder = {
    ...order,
      productId: order.productId.concat(id)
  }
  OrderService
    .updateOrders(order.id, updatedOrder).then(returnedOrder => {
      setOrder(updatedOrder)
      console.log(returnedOrder)
    })
}

  return (
      <Fragment>
        <MuiThemeProvider theme = {CardTheme}>
            <div className = "boxGrid">
              {history.map(history => (
                <div className={classNames('boxContainer-', history.id ).replace(' ', "")}>
                <Card className={classes.root} key={history.id}>
                  <CardMedia
                  className={classes.media}
                  image={history.image_link}
                  title={history.title}
                  />
                  <CardHeader title={history.title}/>
                  <CardActions>
                    <IconButton
                        className={clsx(classes.expand, {
                        [classes.expandOpen]: expandedId === history.id,
                        })}
                        onClick={() => handleExpandClick(history.id)}
                        aria-expanded={expandedId === history.id}
                        aria-label="show more">
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expandedId === history.id} timeout="auto" unmountOnExit> 
                      <CardContent>
                        <Typography paragraph>{history.description}</Typography>
                        <Typography variant="h5">Ingredients:</Typography>
                          <List aria-label="ingredients">
                            <hr/>
                            <ListItem>
                              <ListItemText>{history.ingredients[0]}</ListItemText>
                              <ListItemText>{history.ingredients[1]}</ListItemText>
                              <ListItemText>{history.ingredients[2]}</ListItemText>
                              </ListItem>
                          </List>
                        <Typography color = "primary" align="right" variant="h4" >${history.price}</Typography>
                          <CardActions>
                            <IconButton className={clsx(classes.changeColor, {
                              [classes.changeColorOpen]: ChangeId === history.id,
                              })}
                              onClick={() => handleColorClick(history.id)}
                              aria-expanded={ChangeId === history.id}
                              aria-label="add to favorites">
                              <FavoriteIcon/>
                            </IconButton>
                            <IconButton
                              aria-label="Add To Order"
                              onClick={() => {
                                if (newOrder === -1) {
                                  addToOrder(history.id)
                                } else {
                                  updateOrder(history.id)
                                }
                              }
                            }
                                >
                                {/* <OrderControls productId={product.id} productArray={order.productId}/> */}
                            < AddIcon />
                            </IconButton>
                          </CardActions>
                      </CardContent>
                    </Collapse>
                  </Card>

                </div>
              )
              )
          }
        </div>
      </MuiThemeProvider>
    </Fragment >
  )
}
export default History; 