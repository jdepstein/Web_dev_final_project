import { createSlice } from "@reduxjs/toolkit";

import {updatePostThunk, deletePostThunk, createPostThunk, findPostsThunk, findTeamPostsThunk, findUserPostsThunk}
    from "../thunks/posts-thunks";


const initialState = {
    posts: [],
    loading: false
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [findPostsThunk.pending]:
            (state) => {
                state.loading = true
                state.posts = []
            },
        [findPostsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.posts = payload
            },
        [findPostsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findTeamPostsThunk.pending]:
            (state) => {
                state.loading = true
                state.posts = []
            },

        [findTeamPostsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.posts = payload
            },
        [findTeamPostsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },

        [findUserPostsThunk.pending]:
            (state) => {
                state.loading = true
                state.posts = []
            },
        [findUserPostsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.posts = payload
            },
        [findUserPostsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },


        [deletePostThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.posts = state.posts
                    .filter(t => t._id !== payload)
            },

        [createPostThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.posts.push(payload)
            },

        [updatePostThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const postNdx = state.posts.findIndex((p) => p._id === payload._id)
                state.posts[postNdx] = {
                    ...state.posts[postNdx],
                    ...payload
                }
            }

    },
    reducers: {}
});

export default postsSlice.reducer;