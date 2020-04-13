import axios from 'axios';
const orderUrl = 'http://localhost:3000/Order';
// const productUrl = "http://localhost:3000/Products";

  const getAll = () => {
    const request = axios.get(orderUrl)
    return request.then(response => response.data)
  }
  
  const create = newObject => {
    const request = axios.post(orderUrl, newObject)
    return request.then(response => response.data)
  }
  
  const update = (id, newObject) => {
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
  
  export default { getAll, create, update, getOrderByOrderId, getOrderByUserId }