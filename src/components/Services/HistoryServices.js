import axios from 'axios';
const favoriteUrl = 'http://localhost:3000/history';

//History

const getAllHistory = () => {
  const request = axios.get(favoriteUrl)
  return request.then(response => response.data)
}

const createHistory = newObject => {
  const request = axios.post(favoriteUrl, newObject)
  return request.then(response => response.data)
}

const updateHistory = (id, newObject) => {
  const request = axios.put(`${favoriteUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const getHistoryByUserId = (userId) => {
  const request = axios.get(favoriteUrl + "/?userId=" + userId)
  return request.then(response => response.data)
}
  


  export default {
    getAllHistory,
    createHistory, 
    updateHistory, 
    getHistoryByUserId,
  }