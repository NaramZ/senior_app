import axios from 'axios';
const baseUrl = 'http://localhost:3000/Order';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }
  
  const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
  }
  
  const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
  }

  // Store Page
  const getOrderByOrderId = (orderId) => {
    const request = axios.get(`${baseUrl}/${orderId}`)
    return request.then(response => response.data)
  }

  // History
  const getOrderByUserId = (userId) => {
    const request = axios.get(baseUrl + "?userId=" + userId)
    return request.then(response => response.data)
  }
  
  export default { getAll, create, update, getOrderByOrderId, getOrderByUserId }