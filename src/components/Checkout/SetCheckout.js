import React, { Fragment, useEffect, useState } from 'react';
import OrderService from '../Services/Order';
import ProductService from '../Services/Products';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const ProductMap = ({ product }) => {
    // console.log("fish", product) THIS IS ALSO RENDERING EVERYIME I OPEN THE TAB
    if (product.length > 0) {
      return (
        product.map(productp => (
          <List>
            <ListItem>
              <ListItemText>{productp.title}</ListItemText>
            </ListItem>
          </List>
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
      OrderService.getOrderByOrderId(4)
        .then(response => {
          response.productId.map(orderid => (
            ProductService
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