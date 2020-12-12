// fetching api 
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-6d1a7/us-central1/api' // the api (cloud function) url in  FUNCTION folder => index.js
});

export default instance;