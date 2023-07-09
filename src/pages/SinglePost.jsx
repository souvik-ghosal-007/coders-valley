import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { db } from "../firebase";

const SinglePost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    const getPostById = async (postId) => {
        try {
            const postDoc = await getDoc(doc(db, "posts", id));

            if (postDoc.exists()) {
                const post = {
                    id: postDoc.id,
                    ...postDoc.data(),
                };
                return post;
            } else {
                console.log("Post not found");
                return null;
            }
        } catch (error) {
            console.error("Error fetching post:", error);
            return null;
        }
    };

    const fetchPost = async () => {
        const post = await getPostById(id);
        setTimeout(() => {
            setPost(post);
        }, 2000);
    };

    useEffect(() => {
        fetchPost();
    });

    const handleBack = (e) => {
        e.preventDefault();

        navigate(-1);
    };

    return (
        <>
            <Header />
            {post !== null ? (
                <div className="bg-slate-200 w-[1024px] rounded-md m-2 flex flex-col overflow-x-scroll mt-20">
                    <div className="border-[2px] rounded-md rounded-b-none border-slate-500 px-6 py-2 w-full flex justify-between">
                        <span className="text-4xl font-bold">{post.title}</span>
                        <span
                            className="bg-slate-400 py-2 px-4 uppercase rounded-md cursor-pointer"
                            onClick={handleBack}
                        >
                            Back
                        </span>
                    </div>
                    <div className="flex items-center px-5 py-2 gap-2 border-[2px] border-t-0 border-b-0 border-slate-500">
                        <img
                            src="https://lh3.googleusercontent.com/a/AAcHTtdXD7R87nil-Bn_KtxRWr6gDFPHp-x7QdRCLT4SyDH_=s96-c"
                            alt=""
                            className="w-[25px] h-[25px] rounded-full"
                        />
                        <span className="text-xs text-slate-500">{post.userId}</span>
                    </div>
                    <div className="border-[2px] rounded-md rounded-t-none border-slate-500">
                        <div
                            className="p-6"
                            dangerouslySetInnerHTML={{ __html: post.body }}
                        />
                    </div>
                </div>
            ) : (
                <ReactLoading
                    type={"spinningBubbles"}
                    color={"gray"}
                    height={20}
                    width={80}
                    className="m-60"
                />
            )}
        </>
    );
};

export default SinglePost;
