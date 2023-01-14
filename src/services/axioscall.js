import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://instachat.adidasshoe.shop',
});

export default instance;


// https://instachat.adidasshoe.shop
// http://localhost:8000