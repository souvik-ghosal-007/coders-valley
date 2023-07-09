import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Posts from "../components/Posts";
import { setSignInStatus } from "../features/SignInStatus";
import { setUser } from "../features/UserSlice";
import { auth } from "../firebase";

const Homepage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const { uid, email, photoURL, displayName } = user;
                dispatch(setUser({ uid, email, photoURL, displayName }));
                dispatch(setSignInStatus(true));
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <Header />

            <Posts />
        </div>
    );
};

export default Homepage;
