import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import skillsService from "./skillsService";

export const getSkills = createAsyncThunk('skills/get-skills', async(thunkAPI)=>{
    try {
        return await skillsService.getSkills();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

const initialState = {
    skills: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getSkills.pending, (state)=>{
            state.isLoading = true;
        }).addCase(getSkills.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.skills = action.payload;
        }).addCase(getSkills.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })     
        
    }
})

export default skillsSlice.reducer;