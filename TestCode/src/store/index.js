import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './reduxDemo';
import userSlice from './user';
import todosSlice from "./todos";

export default configureStore({
    reducer: {
        counterReducer: counterSlice.reducer,
        userReducer: userSlice.reducer,
        todosReducer: todosSlice.reducer
    },
})
