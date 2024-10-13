import axios from 'axios';

const BASE_URL = 'https://leaderboard-backend-ycze.onrender.com/api';

export const getUsers = () => axios.get(`${BASE_URL}/users`);
export const createUser = (userData) => axios.post(`${BASE_URL}/users`, userData);
export const claimPoints = (id) => axios.post(`${BASE_URL}/users/${id}/claim`);
export const getClaimHistory = (id) => axios.get(`${BASE_URL}/users/${id}/claim-history`);
