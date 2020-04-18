import React, { Fragment, useEffect, useState } from 'react';
import {OrderServices, ProductServices} from '../../Services/Information';

const ProductMap = ({ product }) => {
    // console.log("fish", product) THIS IS ALSO RENDERING EVERYIME I OPEN THE TAB
    if (product.length > 0) {
      return (
        product.map(productp => (
              <div>{productp.title}{console.log("ayy bro", product.title)}</div>
        ))
      )
    } else {
      return (<div/>)
    }
  }
  
  const Favorites = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
      const newArray = []
      OrderServices.getOrderByOrderId(1)
        .then(response => {
          response.productId.map(orderid => (
            ProductServices
              .getProductsByProductId([orderid])
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
export default Favorites; 