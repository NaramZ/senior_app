import axios from 'axios';
const favoriteUrl = 'http://localhost:3000/favorites';

//Favorites

const getAllFavorites = () => {
  const request = axios.get(favoriteUrl)
  return request.then(response => response.data)
}

const createFavorites = newObject => {
  const request = axios.post(favoriteUrl, newObject)
  return request.then(response => response.data)
}

const updateFavorites = (id, newObject) => {
  const request = axios.put(`${favoriteUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const getFavoritesByUserId = (userId) => {
  const request = axios.get(favoriteUrl + "/?userId=" + userId)
  return request.then(response => response.data)
}
  


  export default {
    getAllFavorites,
    createFavorites, 
    updateFavorites, 
    getFavoritesByUserId,
  }