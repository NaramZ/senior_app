import React, { Fragment, useEffect, useState } from 'react';
import OrderServices from '../Services/OrderServices';
import ProductServices from '../Services/ProductServices';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { MuiThemeProvider} from '@material-ui/core/styles';
import {CheckoutTheme} from './CheckoutMenu.styled';



const ProductMap = ({ product }) => {
    // console.log("fish", product) THIS IS ALSO RENDERING EVERYIME I OPEN THE TAB
    if (product.length > 0) {
      return (
        product.map(productp => (
          <MuiThemeProvider theme = {CheckoutTheme}>
          <List>
            <ListItem>
              <ListItemText>{productp.title}</ListItemText>
            </ListItem>
          </List>
          </MuiThemeProvider>
        ))
      )
    } else {
      return (<div/>)
    }
  }
  
  const Order = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
      const newArray = []
      OrderServices.getOrderByOrderId(1)
        .then(response => {
          response.productId.map(orderid => (
            ProductServices
              .getOrderByOrderId([orderid])
              .then(response => {
                console.log("product response", response);
                // const newProduct = product.concat(response)
                newArray.push(response)
              }
              ).then(
                setProduct(newArray)
              )
          ))
        })
    }, []) //TODO: Fix multiple Hello there calls

    return (
      <Fragment>
        <Fragment>
        <ProductMap product={product} />
        </Fragment>
      </Fragment>
    )
    }
export default Order; 