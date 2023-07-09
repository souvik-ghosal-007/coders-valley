import { signInWithPopup } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { setSignInStatus } from "../features/SignInStatus";
import { auth, db, provider } from "../firebase";

const Login = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email);
            dispatch(setSignInStatus(true));

            createUser(data.user);
        });
    };

    const createUser = async (user) => {
        const usersCollection = collection(db, "users");
        const userRef = doc(usersCollection, user.uid);

        const userData = {
            username: user.email,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        };

        try {
            await setDoc(userRef, userData, { merge: true });
            console.log("User document created successfully!");
        } catch (error) {
            console.error("Error creating user document:", error);
        }
    };

    useEffect(() => {
        setValue(localStorage.getItem("email"));
        dispatch(setSignInStatus(localStorage.getItem("email") !== null));
    }, []);

    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl p-7">Login</h1>
                <div
                    onClick={handleClick}
                    className="flex items-center gap-2 border w-[250px] justify-center h-[40px] cursor-pointer hover:bg-black hover:text-white"
                >
                    <FcGoogle />
                    {value === null ? (
                        <span>Sign In with Google</span>
                    ) : (
                        navigate("/")
                    )}
                </div>
            </div>
        </>
    );
};

export default Login;
