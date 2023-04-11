import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const POST_API = `${API_BASE}/posts`;
const USER_POST_API = `${API_BASE}/user-posts`;
const TEAM_POST_API = `${API_BASE}/team-posts`;


export const createPost = async (post) => {
    const response = await axios.post(POST_API, post)
    return response.data;
}

export const findPosts = async () => {
    const response = await axios.get(POST_API);
    return response.data;
}

export const findTeamPosts = async (tag) => {
    const response = await axios.get(`${TEAM_POST_API}/${tag}`);
    return response.data;
}

export const findUserPosts = async (handle) => {
    console.log(handle);
    console.log(`${USER_POST_API}/${handle}`)
    const response = await axios.get(`${USER_POST_API}/${handle}`);
    return response.data;
}

export const deletePost = async (pid) => {
    const response = await axios
        .delete(`${POST_API}/${pid}`)
    return response.data
}

export const updatePost = async (post) => {
    const response = await axios
        .put(`${POST_API}/${post._id}`, post);
    return post;
}