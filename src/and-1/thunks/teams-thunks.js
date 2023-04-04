import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "../services/teams-service"
import axios from "axios";

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
        async (team) =>
            await service.updateTeam(team)
    )
