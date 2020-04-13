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
  const [order, setOrder] = useState({productId: []});
  const [product, setProduct] = useState([]);


 

  useEffect(() => {
    OrderService.getOrderByOrderId(2)
    .then(response => {
      setOrder(response)
    })
  }, [])

  useEffect(() => {
    order.productId.map(order => (
      ProductService
      .getOrderByOrderId([order])  
      .then(response => {  
        setProduct(response)      
        console.log(order)      
      }
      )
    )
    )
  }
  )
    
    

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