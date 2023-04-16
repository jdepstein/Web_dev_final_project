import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const POST_API = `${API_BASE}/posts`;
//const POST_API = "https://final-project-node-server.onrender.com/api/posts"



const api = axios.create({
    withCredentials: true,
  });



export const createPost = async (post) => {
    const response = await api.post(POST_API, post)
    return response.data;
}

export const findPosts = async () => {
    const response = await api.get(POST_API);
    return response.data;
}

export const findTeamPosts = async (tag) => {
    const response = await api.get(`${POST_API}/team/${tag}`);
    return response.data;
}

export const findUserPosts = async (handle) => {
    const response = await api.get(`${POST_API}/user/${handle}`);
    return response.data;
}

export const deletePost = async (pid) => {
    const response = await api
        .delete(`${POST_API}/${pid}`)
    return response.data
}

export const updatePost = async (post) => {
    const response = await api
        .put(`${POST_API}/${post._id}`, post);
    return post;
}

export const deleteAllUsersPosts = async (handle) => {
   const response = await api
        .delete(`${POST_API}/user/${handle}`)
    return response.data 
}

export const deleteAllTeamsPosts = async (tag) => {
    const response = await api
        .delete(`${POST_API}/team/${tag}`)
    return response.data
}