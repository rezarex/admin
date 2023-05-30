import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import projectsService from "./projectsService";

export const getProjects = createAsyncThunk('projects/get-projects', async(thunkAPI)=>{
    try {
        return await projectsService.getProjects();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const createProjects = createAsyncThunk('projects/create-projects', async(projectData, thunkAPI)=>{
    try {
        return await projectsService.createProjects(projectData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const resetState = createAction("Reset_all");

const initialState = {
    projects: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getProjects.pending, (state)=>{
            state.isLoading = true;
        }).addCase(getProjects.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.projects = action.payload;
        }).addCase(getProjects.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(createProjects.pending, (state)=>{
            state.isLoading = true;
        }).addCase(createProjects.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdProjects = action.payload;
        }).addCase(createProjects.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(resetState, ()=>initialState);
        
    }
})

export default projectsSlice.reducer;