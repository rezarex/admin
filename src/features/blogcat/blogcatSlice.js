import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from './blogcatService'

export const getCategory = createAsyncThunk('category/get-category', async(thunkAPI)=>{
    try {
        return await categoryService.getCategory();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

const initialState = {
    category: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getCategory.pending, (state)=>{
            state.isLoading = true;
        }).addCase(getCategory.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.category = action.payload;
        }).addCase(getCategory.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })     
        
    }
})

export default categorySlice.reducer;