import axios from 'axios';
const favoriteUrl = 'http://localhost:3000/favorite';


  
  



//Favorites

getAllFavorites = () => {
  const request = axios.get(favoriteUrl)
  return request.then(response => response.data)
},

createFavorites = newObject => {
  const request = axios.post(favoriteUrl, newObject)
  return request.then(response => response.data)
},

updateFavorites = (id, newObject) => {
  const request = axios.put(`${favoriteUrl}/${id}`, newObject)
  return request.then(response => response.data)
},

getFavoritesByUserId = (userId) => {
  const request = axios.get(favoriteUrl + "?userId=" + userId)
  return request.then(response => response.data)
}
  

//Products

  

getAllProducts = () => {
  const request = axios.get(ProductUrl)
  return request.then(response => response.data)
},

createProducts = newObject => {
  const request = axios.post(ProductUrl, newObject)
  return request.then(response => response.data)
},

updateProducts = (id, newObject) => {
  const request = axios.put(`${ProductUrl}/${id}`, newObject)
  return request.then(response => response.data)
},

// Store Page
getProductsByProductId = (productId) => {
  const request = axios.get(`${ProductUrl}/${productId}`)
  return request.then(response => response.data)
}

  export default {
    getAllFavorites,
    createFavorites, 
    updateFavorites, 
    getFavoritesByUserId,
  }