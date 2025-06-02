import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { postClientApi } from '../post-client-api/postapi';

// Create an entity adapter for normalized state
const postsAdapter = createEntityAdapter();

// Async thunk
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const data = postClientApi();
    return data;
})

// Slice
const postsSlice = createSlice({
    name : "posts",
    initialState : postsAdapter.getInitialState({
        status:'idle',
        error:null
    }),
    reducers:{
        clearPosts:(state) => {
            postsAdapter.removeAll(state);
            state.status = 'idle'
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchPosts.pending, (state) =>{
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) =>{
            postsAdapter.setAll(state, action.payload)
            state.status = 'succeeded'
        })
        .addCase(fetchPosts.rejected, (state, action) =>{
            state.status = 'failed'
            state.error = action.error.message;
        })
    }
})

export default postsSlice.reducer;
