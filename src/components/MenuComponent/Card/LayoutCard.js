import React, { Fragment, useEffect, useState } from 'react';
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
import ProductService from '../../Services/ProductServices';
import OrderService from '../../Services/OrderServices';
import {CardTheme} from '../../../MaterialTheme';
import useStyles from './MaterialCardStyles';


// ----------------------------------------

// const OrderControls = (productId, productArray) => {
//   if (productArray has prouctId) {
//     return <div>
//       <icon button plus></icon>
//       <icon button minus></icon>
//       add up all productid from array
//       </div>
//   } else {
//     <icon button plus></icon>
//   }
// }

const MenuCard = () => {
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

//Handle Getting Info from Server
  const [product, setProduct] = useState([]);
  // const [newProduct, setNewProduct] = useState('');
  const [order, setOrder] = useState({productId: []});
  const [newOrder, setNewOrder] = useState(-1);

  //product service getting the info
  useEffect(() => {
    ProductService      
    .getAllProducts()      
    .then(initialProduct => {        
      setProduct(initialProduct)      
    })  
  }, [])

  // useEffect(() => {
  //   OrderService.getOrderByOrderId(1)
  //   .then(response => {
  //     console.log(response)
  //   })
  // }, [])

  //order service
  // useEffect(() => {
  //   OrderService      
  //   .getAll()
  //   .then(initialOrder => {        
  //     console.log('initial order', initialOrder)
  //     setOrder(initialOrder)
  //   })  
  // }, [])

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

  //  const addProduct = ()  => {
  //     const productObject = {
  //       title: newProduct,
  //       price: newProduct,
  //       ingredients: [],
  //       image_link: newProduct,
  //       description: newProduct,
  //       date: new Date().toISOString(),
  //     }
  //     ProductService
  //       .create(productObject)
  //         .then(returnedProduct => {
  //           setProduct(product.concat(returnedProduct))
  //           setNewProduct('')
  //       })
  //   }

    // const Product = ({ product, price }) => {
    //   const label = product.price
    //     ? 'make not price' : 'make price'
    // }

  return (
    <Fragment>
        <MuiThemeProvider theme = {CardTheme}>
            <div className = "boxGrid">
              {product.map(product => (
                <div className={classNames('boxContainer-', product.id ).replace(' ', "")}>
                <Card className={classes.root} key={product.id}>
                  <CardMedia
                  className={classes.media}
                  image={product.image_link}
                  title={product.title}
                  />
                  <CardHeader title={product.title}/>
                  <CardActions>
                    <IconButton
                        className={clsx(classes.expand, {
                        [classes.expandOpen]: expandedId === product.id,
                        })}
                        onClick={() => handleExpandClick(product.id)}
                        aria-expanded={expandedId === product.id}
                        aria-label="show more">
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expandedId === product.id} timeout="auto" unmountOnExit> 
                      <CardContent>
                        <Typography paragraph>{product.description}</Typography>
                        <Typography variant="h5">Ingredients:</Typography>
                          <List aria-label="ingredients">
                            <hr/>
                            <ListItem>
                              <ListItemText>{product.ingredients[0]}</ListItemText>
                              <ListItemText>{product.ingredients[1]}</ListItemText>
                              <ListItemText>{product.ingredients[2]}</ListItemText>
                              </ListItem>
                          </List>
                        <Typography color = "primary" align="right" variant="h4" >${product.price}</Typography>
                          <CardActions>
                            <IconButton className={clsx(classes.changeColor, {
                              [classes.changeColorOpen]: ChangeId === product.id,
                              })}
                              onClick={() => handleColorClick(product.id)}
                              aria-expanded={ChangeId === product.id}
                              aria-label="add to favorites">
                              <FavoriteIcon/>
                            </IconButton>
                            <IconButton
                              aria-label="Add To Order"
                              onClick={() => {
                                if (newOrder === -1) {
                                  addToOrder(product.id)
                                } else {
                                  updateOrder(product.id)
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
  );
};

export default MenuCard;