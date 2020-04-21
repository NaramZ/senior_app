import axios from 'axios';
const ProductUrl = 'http://localhost:3000/products';



const getAllProducts = () => {
    const request = axios.get(ProductUrl)
    return request.then(response => response.data)
  }
  
  const createProducts = newObject => {
    const request = axios.post(ProductUrl, newObject)
    return request.then(response => response.data)
  }
  
  const updateProducts = (id, newObject) => {
    const request = axios.put(`${ProductUrl}/${id}`, newObject)
    return request.then(response => response.data)
  }
  
  // Store Page
  const getProductsByProductId = (productId) => {
    const request = axios.get(`${ProductUrl}/${productId}`)
    return request.then(response => response.data)
  }

  export default {
    getAllProducts,
    createProducts,
    updateProducts,
    getProductsByProductId
  }