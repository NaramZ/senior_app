import axios from 'axios';
const userUrl = 'http://localhost:3000/users';



const getUser = (email, password) => {
    const request = axios.get(userUrl + "?userId=" + userId)
    return request.then(response => response.data)
  }


  export default {getUser};