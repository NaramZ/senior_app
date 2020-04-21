import React, { Fragment, useEffect, useState } from 'react';
import ProductServices from '../../Services/ProductServices';
import FavoriteServices from '../../Services/FavoriteServices';


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
      FavoriteServices.getFavoritesByUserId(1)
        .then(response => {
          console.log("favoritesByUserId", response)
          response[0].productId.map(productId => (
            ProductServices
              .getProductsByProductId(productId)
              .then(response => {
                console.log("productsByProductId", response);
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