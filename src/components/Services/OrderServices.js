import axios from 'axios';
const orderUrl = 'http://localhost:3000/order';

//Orders

const getAllOrders = () => {
    const request = axios.get(orderUrl)
    return request.then(response => response.data)
  }
  
  const createOrders = newObject => {
    const request = axios.post(orderUrl, newObject)
    return request.then(response => response.data)
  }
  
  const updateOrders = (id, newObject) => {
    const request = axios.put(`${orderUrl}/${id}`, newObject)
    return request.then(response => response.data)
  }

  // Store Page
  const getOrderByOrderId = (orderId) => {
    const request = axios.get(`${orderUrl}/${orderId}`)
    return request.then(response => response.data)
  }

  // History
  const getOrderByUserId = (userId) => {
    const request = axios.get(orderUrl + "?userId=" + userId)
    return request.then(response => response.data)
  }

  export default {
    getAllOrders,
    createOrders, 
    updateOrders, 
    getOrderByOrderId, 
    getOrderByUserId,
  }