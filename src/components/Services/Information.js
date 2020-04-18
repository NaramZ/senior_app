import axios from 'axios';
const orderUrl = 'http://localhost:3000/order';
const favoriteUrl = 'http://localhost:3000/favorite';
const ProductUrl = 'http://localhost:3000/products';

//Orders

const OrderServices =() => {

  return(
  getAllOrders = () => {
    const request = axios.get(orderUrl)
    return request.then(response => response.data)
  },
  
  createOrders = newObject => {
    const request = axios.post(orderUrl, newObject)
    return request.then(response => response.data)
  },
  
  updateOrders = (id, newObject) => {
    const request = axios.put(`${orderUrl}/${id}`, newObject)
    return request.then(response => response.data)
  },

  // Store Page
  getOrderByOrderId = (orderId) => {
    const request = axios.get(`${orderUrl}/${orderId}`)
    return request.then(response => response.data)
  },

  // History
  getOrderByUserId = (userId) => {
    const request = axios.get(orderUrl + "?userId=" + userId)
    return request.then(response => response.data)
  }
  )}
  



//Favorites

const FavoriteServices =() =>{
  return (
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
  )}

//Products
const ProductServices = () => {
  
  return(

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
  )}

  export default 
  { ProductServices, OrderServices, FavoriteServices}
    // getAllOrders,
    // createOrders, 
    // updateOrders, 
    // getOrderByOrderId, 
    // getOrderByUserId,
    // getAllFavorites,
    // createFavorites, 
    // updateFavorites, 
    // getFavoritesByUserId,
    // getAllProducts,
    // createProducts,
    // updateProducts,
    // getProductsByProductId