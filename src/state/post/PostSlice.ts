import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'posts',
    initialState:{
        posts:[],
        isLoading: false,
    },
    // reducers:{
    //     getFetchDta:(state,action) =>{
    //         state.posts=action.payload;
    //     }
    // }

    reducers: {
        fetchPostsRequest: (state) => {
            state.isLoading = true;
        },
        fetchPostsSuccess: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        },
        fetchPostsFailure: (state, action) => {
            state.isLoading = false;
        },
    },

})

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure, } = postSlice.actions

export default postSlice.reducer