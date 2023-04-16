import axios from "axios";
//const FOLLOW_URL = "http://localhost:4000/api/follows";
const FOLLOW_URL = "https://final-project-node-server.onrender.com/api/follows"

const api = axios.create({
    withCredentials: true,
  });



export const followUser = async (userid) => { 
    const response  = await api.post(`${FOLLOW_URL}/${userid}`)
    return response; 
}

export const unfollowUser = async (userid) => { 
    const response  = await api.delete(`${FOLLOW_URL}/${userid}`)
    return response; 
}

export const getFollowers = async (userid) => { 
    const response  = await api.get(`${FOLLOW_URL}/followers/${userid}`)
    return response.data; 
}

export const getFollowing = async (userid) => {
    const response  = await api.get(`${FOLLOW_URL}/following/${userid}`)
    return response.data; 
}

export const deleteFollower = async (userid) => {
    const response  = await api.delete(`${FOLLOW_URL}/followers/${userid}`)
    return response; 
}

export const deleteFollowing = async (userid) => {
    const response  = await api.delete(`${FOLLOW_URL}/following/${userid}`)
    return response; 
}

