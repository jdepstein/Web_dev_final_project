import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "../services/teams-service"

export const findTeamsThunk = createAsyncThunk(
    'teams/findTeams', async () =>
        await service.findTeams()
)

export const findIndividualTeamThunk = createAsyncThunk(
    'team/findTeams', async (team) =>
    await service.findIndividualTeam(team)
)


export const createTeamThunk = createAsyncThunk(
    'teams/createTeam',
    async (team) =>
        await service.createTeam(team)
    )

export const updateTeamThunk =
    createAsyncThunk(
        'teams/updateTeam',
        async (team) => {
            return await service.updateTeam(team)

        }
    )

export const deleteTeamThunk =
    createAsyncThunk(
        'teams/deleteTeam',
        async (name) => {
            return await service.deleteTeam(name)

        }
    )

