import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "../services/posts-service"

export const findPostsThunk = createAsyncThunk(
    'posts/findPosts', async () =>
        await service.findPosts()
)

export const findTeamPostsThunk = createAsyncThunk(
    'posts/findPosts', async (tag) =>
        await service.findTeamPosts(tag)
)

export const findUserPostsThunk = createAsyncThunk(
    'posts/findPosts', async (user) =>
    {
        return await service.findUserPosts(user)
    }
)


export const deletePostThunk = createAsyncThunk(
    'posts/deletePost',
    async (postId) => {
        await service.deletePost(postId)
        return postId
    })

export const createPostThunk = createAsyncThunk(
    'posts/createPost',
    async (post) => {
        return await service.createPost(post)
    })

export const updatePostThunk =
    createAsyncThunk(
        'posts/updatePost',
        async (post) =>
            await service.updatePost(post)
    )

export const deleteAllUsersPostsThunk = createAsyncThunk(
    'posts/deleteAllUsersPosts',
    async (handle) => {
        await service.deleteAllUsersPosts(handle)
        return handle
    }

)

export const deleteAllTeamsPostsThunk = createAsyncThunk(
    'posts/deleteAllTeamsPosts',
    async (tag) => {
        await service.deleteAllTeamsPosts(tag)
        return tag
    }
)


