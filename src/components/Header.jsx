import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSignInStatus } from "../features/SignInStatus";
import { clearUser } from "../features/UserSlice";
import { auth } from "../firebase";

const Header = () => {
    const [color, setColor] = useState(false);
    const user = useSelector((state) => state.user);
    const { isSignedIn } = useSelector((state) => state.signInStatus);

    const dispatch = useDispatch();

    const handleLogout = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            dispatch(clearUser());
            dispatch(setSignInStatus(false));
        });
    };

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    const openProfile = () => {};

    return (
        <header
            className={`flex justify-between items-center p-4 top-0 left-0 right-0 shadow fixed transition ease-in duration-200 ${
                color ? "bg-black text-white" : "bg-transparent text-black"
            }`}
        >
            <div className="text-3xl font-black">coders.VALLEY</div>
            <div className="flex items-center">
                <nav className="flex items-center gap-4">
                    <h3 className="cursor-pointer">
                        <Link to="/">Home</Link>
                    </h3>
                    <h3 className="cursor-pointer">
                        <Link to="/about">About</Link>
                    </h3>
                    {isSignedIn !== false && (
                        <h3 className="cursor-pointer">
                            <Link to="/post/create">Create Post</Link>
                        </h3>
                    )}
                    <h3 className="cursor-pointer">
                        <Link to="/sheets">Sheets</Link>
                    </h3>
                    <h3 className="cursor-pointer">
                        <Link to="/contests">Contests</Link>
                    </h3>
                    {user.uid === null ? (
                        <h3 className="cursor-pointer">
                            <Link to="/login">Sign In</Link>
                        </h3>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link to="/profile">
                                <img
                                    className="w-[30px] h-[30px] rounded-full object-cover cursor-pointer"
                                    src={user.photoURL}
                                    alt=""
                                    onClick={openProfile}
                                />
                            </Link>
                            <h3 onClick={handleLogout}>Logout</h3>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
