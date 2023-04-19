import axios from "axios";
const LIKE_URL = "http://localhost:4000/api/likePlayer";
//const FOLLOW_URL = "https://final-project-node-server.onrender.com/api/likePlayer"

const api = axios.create({ 
    withCredentials: true,
    });



export const likePlayer = async (userid) => {
    const response  = await api.post(`${LIKE_URL}/like/${userid}`)
    return response; 
}

export const unlikePlayer = async (userid) => {
    const response  = await api.delete(`${LIKE_URL}/unlike/${userid}`)
    return response; 
}


export const getLikedPlayers = async (userid) => {
    const response  = await api.get(`${LIKE_URL}/likedPlayers/${userid}`)
    return response.data; 
}


export const getLikedBy = async (playerid) => {
    const response  = await api.get(`${LIKE_URL}/whoLikedPlayer/${playerid}`)
    return response.data; 
}

export const deleteLikedPlayer = async (userid) => {
    const response  = await api.delete(`${LIKE_URL}/likedPlayers/${userid}`)
    return response; 
}