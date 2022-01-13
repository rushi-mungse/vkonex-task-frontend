import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5500',
    withCredentials: true,
    header: {
        'Content Type': "application/json",
        Accept: " application/json",
    }
})

export const register=(data)=>api.post('/api/register',data);
export const login=(data)=>api.post('/api/login',data);
export const setAndGetFile=(data)=>api.post('/api/getSetFile',data);

export default api