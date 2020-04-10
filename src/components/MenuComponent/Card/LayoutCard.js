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
import ProductService from '../../Services/Products';
import OrderService from '../../Services/Order';
import {BottomActionButtons, CardTheme} from '../../../MaterialTheme';
import useStyles from './MaterialCardStyles';

// ----------------------------------------

const MenuCard = ({ itineraries, activities }) => {

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
  const [order, setOrder] = useState([]);
  const [newOrder, setNewOrder] = useState('');

  //product service
  useEffect(() => {
    ProductService      
    .getAll()      
    .then(initialProduct => {        
      setProduct(initialProduct)      
    })  
  }, [])

  //order service
  useEffect(() => {
    OrderService      
    .getAll()
    .then(initialOrder => {        
      setOrder(initialOrder)      
    })  
  }, [])

  const addToOrder = (id)  => {
    const orderObject = {
      productId: [],
      image_link: newOrder,
      description: newOrder,
    }
    OrderService
      .update(orderObject)
        .then(returnedObject => {
          setOrder(order.concat(returnedObject))
          setNewOrder('')
      })
  }

// const updateOrder = id => {
//   const order = newOrder.find(n=>id === id)
//   const changedOrder = {...order}

//   OrderService
//     .update(id, changedOrder).then(returnedOrder => {
//       setOrder(order.map(order => order.id !== id ? order : returnedOrder))
//     })
// }

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
                  <CardActions >
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
                        <Typography align="right" variant="h4" color = "primary">${product.price}</Typography>
                        <MuiThemeProvider theme ={BottomActionButtons}>
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
                            onClick={() => addToOrder(
                              order.productId = product.id
                            )}
                            >
                              <AddIcon />
                            </IconButton>
                          </CardActions>
                        </MuiThemeProvider>
                      </CardContent>
                  </Collapse>
                </Card>
                
              </div>
              
            )
          )        
        }
      </div>
    </MuiThemeProvider>
</Fragment>
  );
};

export default MenuCard;