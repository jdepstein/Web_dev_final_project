import { createSlice } from "@reduxjs/toolkit";

import {createTeamThunk, updateTeamThunk, findTeamsThunk, findIndividualTeamThunk}
    from "../thunks/teams-thunks";


const initialState = {
    teams: [],
    loading: true
}

const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    extraReducers: {
        [findTeamsThunk.pending]:
            (state) => {
                state.loading = true
                state.teams = []
            },
        [findTeamsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.teams = payload
            },
        [findTeamsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findIndividualTeamThunk.pending]:
            (state) => {
                state.loading = true
                state.teams = []
            },

        [findIndividualTeamThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.teams = payload[0]
            },
        [findIndividualTeamThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },


        [createTeamThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.teams.push(payload)
            },

        [updateTeamThunk.fulfilled]:
            (state, { payload }) => {
                console.log(payload);
                state.loading = false
                state.teams= {
                    ...state.teams,
                    ...payload
                }
            }

    },
    reducers: {}
});

export default teamsSlice.reducer;