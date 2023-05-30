
import {createSlice, createAsyncThunk, createAction} from '@reduxjs/toolkit'
import authService from './authService';
/**
 * TODO: get user from local storage instead of commented code below which create's 
 * a default state
 */
// const userDefaultState = {
//     _id: null,
//     username: null,
//     email: null,
//     mobile: null,
//     token: null,
// }

const getUserFromLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null



const initialState = {
    //user: userDefaultState,
    user: getUserFromLocalStorage,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const login = createAsyncThunk('auth/login/admin', async(user, thunkAPI)=>{
    try {
        return await authService.login(user)
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const resetState = createAction("Reset_all");

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(login.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(login.fulfilled,(state, action)=>{
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
            state.message = "success";
        })
        .addCase(login.rejected,(state, action)=>{
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            state.isLoading = false;
        }).addCase(resetState, ()=>initialState);
    }
});

export default authSlice.reducer;