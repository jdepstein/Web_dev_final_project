import axios from "axios";
const Players_URL = "http://localhost:4000/api/players";

const api = axios.create({
    withCredentials: true,
  });




export const likePlayer = async (playerid) => {
   const response  = await api.put(`${Players_URL}/like/${playerid}`)
   return response;
}

export const unlikePlayer = async (playerid) => {
    const response  = await api.put(`${Players_URL}/dislike/${playerid}`)
    return response;
}

export const findPlayer = async (playerid) => {
    const response  = await api.get(`${Players_URL}/${playerid}`)
    const ret = response.data
    return ret
}

export const createPlayer = async (player) => {
    const response  = await api.post(`${Players_URL}/`, player)
    return response;
}



