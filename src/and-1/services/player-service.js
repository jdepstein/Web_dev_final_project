import axios from "axios";
const Players_URL = "http://localhost:4000/api/players";
//const FOLLOW_URL = "https://final-project-node-server.onrender.com/api/follows"

const api = axios.create({
    withCredentials: true,
  });




export const likePlayer = async (playerid) => {
    const response  = await api.post(`${Players_URL}/like/${playerid}`)
    return response;
}

export const unlikePlayer = async (playerid) => {
    const response  = await api.delete(`${Players_URL}/like/${playerid}`)
    return response;
}


