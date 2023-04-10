import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const USER_API = `${API_BASE}/users`;


export const getUser = async (handle) => {
    const response = await axios.get(`${USER_API}/${handle}`);
    return response.data;
}

export const updateUser = async (user) => {
    const response = await axios.put(`${USER_API}/${user._id}`, user);
    return user;
}

export const createUser = async (user) => {
    const response = await axios.post(USER_API, user);
    return response.data;
}


export const deleteUser = async (user) => {
    const response = await axios.delete(`${USER_API}/${user._id}`);
    return user;
}
    
