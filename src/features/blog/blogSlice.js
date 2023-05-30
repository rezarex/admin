import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import blogService from "./blogService";

export const getBlogs = createAsyncThunk('blogs/get-blogs', async(thunkAPI)=>{
    try {
        return await blogService.getBlogs();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const getABlog = createAsyncThunk('blog/get-blog', async(id,thunkAPI)=>{
    try {
        return await blogService.getBlog(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const createBlog = createAsyncThunk('blog/create-blog', async(blogData, thunkAPI)=>{
    try {
        return await blogService.createBlog(blogData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const updateBlog = createAsyncThunk('blog/update-blog', async(blogData, thunkAPI)=>{
    try {
        return await blogService.updateBlog(blogData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const resetState = createAction("Reset_all");

const initialState = {
    blogs: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getBlogs.pending, (state)=>{
            state.isLoading = true;
        }).addCase(getBlogs.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.blogs = action.payload;
        }).addCase(getBlogs.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(createBlog.pending, (state)=>{
            state.isLoading = true;
        }).addCase(createBlog.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdBlog = action.payload;
        }).addCase(createBlog.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(getABlog.pending, (state)=>{
            state.isLoading = true;
        }).addCase(getABlog.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.blogTitle = action.payload.title;
        }).addCase(getABlog.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(updateBlog.pending, (state)=>{
            state.isLoading = true;
        }).addCase(updateBlog.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.updatedBlog = action.payload;
        }).addCase(updateBlog.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        }).addCase(resetState, ()=>initialState);     
        
    }
})
// 

export default blogsSlice.reducer;