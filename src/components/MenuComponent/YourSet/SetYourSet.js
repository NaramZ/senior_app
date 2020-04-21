import React, { Fragment, useEffect, useState } from 'react';
import ProductServices from '../../Services/ProductServices';
import FavoriteServices from '../../Services/FavoriteServices';


const FavoritesMap = ({ product }) => {
    console.log("product length", Object.keys(product).length)
    console.log('productMap', product)
  if (product.length > 0) {
    return (
      product.map(productp => (
        <div>{productp.title}</div>
      ))
    )
  } else {
    return (<div />)
  }
}

const Favorites = ({userId}) => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const newArray = []
    FavoriteServices.getFavoritesByUserId(userId)
      .then(response => {
        response[0].productId.map(productId => (
          ProductServices
            .getProductsByProductId(productId)
            .then(response => {
              newArray.push(response)
            }
            ).then(
              setFavorites(newArray)
            )
        ))
      })
  }, [userId]) //TODO: Fix multiple Hello there calls

  return (
    <Fragment>
      <FavoritesMap product={favorites}/>
    </Fragment>
  )
}
export default Favorites; 