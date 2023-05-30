import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import subscriberService from "./subscriberService";

export const getSubscribers = createAsyncThunk('subscribers/get-subscribers', async(thunkAPI)=>{
    try {
        return await subscriberService.getSubscribers();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const resetState = createAction("Reset_all");

const initialState = {
    subscribers: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const subscribersSlice = createSlice({
    name: "subscribers",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getSubscribers.pending, (state)=>{
            state.isLoading = true;
        }).addCase(getSubscribers.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.subscribers = action.payload;
        }).addCase(getSubscribers.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(resetState, ()=>initialState);     
        
    }
})

export default subscribersSlice.reducer;