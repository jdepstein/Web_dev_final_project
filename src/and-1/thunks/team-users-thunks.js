import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "../services/team-users-service"


export const findTeamUserThunk = createAsyncThunk(
    'teams/findTeamUser', async (team) =>
        await service.findTeamUser(team)
)



export const createTeamUserThunk = createAsyncThunk(
    'teams/createTeamUser',
    async (team) => {
        return await service.createTeamUser(team)
    })

export const updateTeamUserThunk =
    createAsyncThunk(
        'teams/updateTeamUser',
        async (team) =>
            await service.updateTeamUser(team)
    )