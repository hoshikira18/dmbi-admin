import axios from 'axios';

const { getAuth } = require('@/store/auth-store');

const BASE_URL =
    `${process.env.NEXT_PUBLIC_BASE_URL}/admin` ||
    'http://localhost:9000/admin';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${getAuth().token}`;

export const instance = axios.create({
    baseURL: BASE_URL,
});
