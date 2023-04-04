import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "../services/team-users-service"


export const findTeamUserThunk = createAsyncThunk(
    'teams/findTeams', async (team) =>
        await service.findTeamUser(team)
)



export const createTeamUserThunk = createAsyncThunk(
    'teams/createTeam',
    async (team) => {
        return await service.createTeamUser(team)
    })

export const updateTeamUserThunk =
    createAsyncThunk(
        'teams/updateTeam',
        async (team) =>
            await service.updateTeamUser(team)
    )