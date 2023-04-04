import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const TEAM_API = `${API_BASE}/teams`;
const SINGLE_TEAM_API = `${API_BASE}/team`;



export const createTeam = async (team) => {
    const response = await axios.post(TEAM_API, team)
    return response.data;
}

export const findTeams = async () => {
    const response = await axios.get(TEAM_API);
    return response.data;
}


export const findIndividualTeam = async (team) => {
    const response = await axios.get(`${SINGLE_TEAM_API}/${team.charAt(0).toUpperCase() + team.slice(1)}`);
    return response.data;
}


export const updateTeam = async (team) => {
    const response = await axios
        .put(`${TEAM_API}/${team._id}`, team);
    return team;
}