import { createSlice } from "@reduxjs/toolkit";

import { findUserThunk, updateUserThunk, deleteUserThunk, 
        createUserThunk, findAllUsersThunk, loginThunk, profileThunk, logoutThunk } from 
    "../thunks/users-thunks"; 


const initialState = {
    user: [],
    currentUser: null,
    loading: false
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: [],
    extraReducers: {
        [findUserThunk.pending]: (state, action) => {
            state.loading = true
        },
        [findUserThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.user = payload[0]
        },
        [findUserThunk.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
        },
        [findAllUsersThunk.pending]: (state, action) => {
            state.loading = true
        },
        [findAllUsersThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.user = payload
        },
        [findAllUsersThunk.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error
        },

        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.user = {
                ...state.user,
                ...payload
            }
        },
        [deleteUserThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.user = payload
        },

        [createUserThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.user = payload
        },

        [loginThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.currentUser = payload
        },

        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
          },

        [profileThunk.fulfilled]: (state, { payload }) => {
        state.currentUser = payload;
        }
       

    }   
})

export default usersSlice.reducer

