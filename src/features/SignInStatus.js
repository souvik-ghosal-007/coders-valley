import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignedIn: false
};

const signInStatusSlice = createSlice({
    name: "signInStatus",
    initialState,
    reducers: {
        setSignInStatus: (state, action) => {
            state.isSignedIn = action.payload
        },
    },
});

export const { setSignInStatus } = signInStatusSlice.actions;

export default signInStatusSlice.reducer;
