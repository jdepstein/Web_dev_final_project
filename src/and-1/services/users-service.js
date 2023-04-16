import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const USER_API = `${API_BASE}/users`;
//const USER_API = "https://final-project-node-server.onrender.com/api/users"


const api = axios.create({
    withCredentials: true,
  });


export const getUser = async (handle) => {
    const response = await api.get(`${USER_API}/${handle}`);
    return response.data;
}

export const getAllUsers = async () => {
    const response = await api.get(USER_API + "/all");
    return response.data;
}


export const updateUser = async (user) => {
    const response = await api.put(`${USER_API}/${user._id}`, user);
    return user;
}

export const createUser = async (user) => {
    const response = await api.post(USER_API, user);
    return response.data;
}


export const deleteUser = async (user) => {
    const response = await api.delete(`${USER_API}/${user}`);
    return user;
}

export const login = async ({ handle, password }) => {
    const response = await api.post(`${USER_API}/login`, {
        handle,
        password,
    });
    const user = response.data;
    return user;    
};

export const logout = async () => {
    const response = await api.post(`${USER_API}/logout`);
    return response.data;
}

export const profile = async () => {
    const response = await api.post(`${USER_API}/profile`);
    return response.data;
}


    
