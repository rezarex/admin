import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import messagesService from "./messagesService";

export const getMessages = createAsyncThunk('messages/get-messages', async(thunkAPI)=>{
    try {
        return await messagesService.getMessages();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const resetState = createAction("Reset_all");

const initialState = {
    messages: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getMessages.pending, (state)=>{
            state.isLoading = true;
        }).addCase(getMessages.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.messages = action.payload;
        }).addCase(getMessages.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(resetState, ()=>initialState);    
        
    }
})

export default messagesSlice.reducer;