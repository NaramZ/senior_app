import React, { Fragment, useEffect, useState } from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './CheckoutMenu.styled';
import {NavLink} from 'react-router-dom';
import OrderService from '../Services/Order';
import ProductService from '../Services/Products';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const Menu = ({ open }) => {
  const [product, setProduct] = useState();
  const [order, setOrder] = useState({productId: []});
  // const [newOrder, setNewOrder] = useState(-1);


 

  useEffect(() => {
    OrderService.getOrderProductsByOrderId(2)
    .then(response => {
      setOrder(response)
    })
  }, [])

  useEffect(() => {
    ProductService
    .getAll()      
    .then(response => {  
      setProduct(response)      
      console.log(response)      
    })  }, [])

  useEffect(() => {
    ProductService      
    .getAll()      
    .then(initialProduct => {        
      setProduct(initialProduct)      
    })  
  }, [])




  // const updateOrder = (id) => {
  //   const updatedOrder = {
  //     ...order,
  //       productId: order.productId.concat(id)
  //   }

  //   OrderService
  //     .update(order.id, updatedOrder).then(returnedOrder => {
  //       setOrder(updatedOrder)
  //       console.log(returnedOrder)
  //     })
  // }

  return (
    <Fragment>
      <StyledMenu open={open}>
        <NavLink to = "/Checkout" exact>
          <span role="img" aria-label="Order">📝</span>
          <h5>My Order</h5>
        </NavLink>
        {product.map(product => (
          <List>
            <ListItem>
              <ListItemText>{product.title}</ListItemText>
            </ListItem>
          </List>
        ))}
      </StyledMenu>
    </Fragment>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;