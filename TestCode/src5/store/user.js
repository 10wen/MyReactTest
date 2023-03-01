import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userStore',
    initialState: {
        loginUser: {}
    },
    reducers: {
        userLogin: (state, action) => {
            // console.log(action);
            state.loginUser = action.payload;
        },
        userLogout: (state) => {
            state.loginUser = {}
        }
    }
});


export const { userLogin, userLogout } = userSlice.actions;

export default userSlice;