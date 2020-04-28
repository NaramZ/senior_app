import axios from 'axios';
const userUrl = 'http://localhost:3000/users';


const createUser = newObject => {
    const request = axios.post(userUrl, newObject)
    return request.then(response => response.data)
  }


export default {createUser};