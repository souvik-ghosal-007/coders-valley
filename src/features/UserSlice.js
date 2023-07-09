import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uid: null,
    email: null,
    photoURL: null,
    displayName: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.photoURL = action.payload.photoURL;
            state.displayName = action.payload.displayName;
        },
        clearUser: (state) => {
            state.uid = null;
            state.email = null;
            state.photoURL = null;
            state.displayName = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
