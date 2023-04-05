import { createSlice } from "@reduxjs/toolkit";

import {findTeamUserThunk, createTeamUserThunk, updateTeamUserThunk}
    from "../thunks/team-users-thunks";


const initialState = {
    teamUsers: {},
    loading: false
}

const teamUsersSlice = createSlice({
    name: 'teamUsers',
    initialState,
    extraReducers: {
        [findTeamUserThunk.pending]:
            (state) => {
                state.loading = true
                state.teamUsers = {}
            },

        [findTeamUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.teamUsers = payload[0]
            },
        [findTeamUserThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },


        [createTeamUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.teamUsers.push(payload)
            },

        [updateTeamUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.teamUsers = {
                    ...state.teamUsers,
                    ...payload
                }
            }

    },
    reducers: {}
});

export default teamUsersSlice.reducer;