import axios from 'axios';
//const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const API_BASE = "https://final-project-node-server.onrender.com/api"
const TEAM_API = `${API_BASE}/teams`;
const SINGLE_TEAM_API = `${API_BASE}/team`;


const api = axios.create({
    withCredentials: true,
  });



export const createTeam = async (team) => {
    const response = await api.post(TEAM_API, team)
    return response.data;
}

export const findTeams = async () => {
    const response = await api.get(TEAM_API);
    return response.data;
}


export const findIndividualTeam = async (team) => {
    const response = await api.get(`${SINGLE_TEAM_API}/${team.charAt(0).toUpperCase() + team.slice(1)}`);
    return response.data;
}


export const updateTeam = async (team) => {
    const response = await api
        .put(`${TEAM_API}/${team._id}`, team);
    return team;
}

export const deleteTeam = async (name) => {
    const response = await api
       .delete(`${TEAM_API}/${name}`);
    return response.data
}

