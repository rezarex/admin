import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import membersService from "./membersService";

export const getUsers = createAsyncThunk('members/get-members', async(thunkAPI)=>{
    try {
        return await membersService.getMembers();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const resetState = createAction("Reset_all");


const initialState = {
    members: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const membersSlice = createSlice({
    name: "members",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getUsers.pending, (state)=>{
            state.isLoading = true;
        }).addCase(getUsers.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.members = action.payload;
        }).addCase(getUsers.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(resetState, ()=>initialState);    
        
    }
})

export default membersSlice.reducer;