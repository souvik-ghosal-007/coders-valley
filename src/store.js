import { configureStore } from "@reduxjs/toolkit";
import signInStatusReducer from "./features/SignInStatus";
import userReducer from "./features/UserSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        signInStatus: signInStatusReducer,
    },
});
