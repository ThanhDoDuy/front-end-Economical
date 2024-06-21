import axios from 'axios';
import store from '../store'

const api = axios.create({
    baseURL: 'http://localhost:5000/v1/api',
});

// Axios request interceptor.
// Interceptors are functions that Axios runs before a request is sent or after a response is received
// this is the request interceptor which executed before a request
api.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const accessTokentoken = state.auth.accessToken;
        if (accessTokentoken) {
            config.headers['Authorization'] = `Bearer ${accessTokentoken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;