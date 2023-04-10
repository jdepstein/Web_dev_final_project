import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "../services/users-service"


export const findUserThunk = createAsyncThunk(
    "users/findUser", async (handle) => {
        return await service.getUser(handle)
    }
)

export const updateUserThunk = createAsyncThunk(
    "users/updateUser", async (user) => {
        return await service.updateUser(user)
    }
)

export const createUserThunk = createAsyncThunk(
    "users/createUser", async (user) => {
        return await service.createUser(user)
    }
)

export const deleteUserThunk = createAsyncThunk(
    "users/deleteUser", async (user) => {
        return await service.deleteUser(user)
    }
)
