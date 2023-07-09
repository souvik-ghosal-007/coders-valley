import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import { db } from "../firebase";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const user = useSelector((state) => state.user);

    const navigate = useNavigate();

    const getPostBody = (value) => {
        setBody(value);
    };

    const createPost = async (uid) => {
        const postsCollection = collection(db, "posts");

        const postData = {
            userId: uid,
            title,
            body,
            createdAt: Date.now(),
        };

        try {
            await addDoc(postsCollection, postData);
        } catch (err) {
            console.error("Error creating post", err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === "" || body === "") return;

        createPost(user.uid);

        navigate("/");
    };

    return (
        <div className="flex flex-col items-center p-4 justify-center">
            <span className="text-4xl font-semibold">Create New Post</span>
            <input
                className="w-[700px] border p-4 m-4"
                type="text"
                placeholder="Enter Title Here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Editor getPostBody={getPostBody} />
            <button
                className="w-[700px] rounded-sm border-[2px] active:bg-black active:text-white active:border-black uppercase"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};

export default CreatePost;
