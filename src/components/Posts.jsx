import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    const getPosts = async () => {
        try {
            const postsCollection = collection(db, "posts");
            const querySnapshot = await getDocs(postsCollection);

            const posts = [];
            querySnapshot.forEach((doc) => {
                const postData = doc.data();
                posts.push({
                    id: doc.id,
                    ...postData,
                });
            });

            return posts;
        } catch (error) {
            console.error("Error fetching posts:", error);
            return [];
        }
    };

    const fetchPosts = async () => {
        const posts = await getPosts();
        setTimeout(() => {
            setPosts(posts);
        }, 2000);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    // const renderData = data.slice(
    //     currentPage * itemsPerPage,
    //     (currentPage + 1) * itemsPerPage
    // );

    return (
        <div className="p-16 mt-4 flex flex-col items-center justify-center w-[850px] h-full">
            {posts.length === 0 ? (
                <ReactLoading
                    type={"spinningBubbles"}
                    color={"gray"}
                    height={20}
                    width={80}
                    className="m-60"
                />
            ) : (
                posts.map((post) => (
                    <>
                        <div
                            className="w-[850px] cursor-pointer"
                            onClick={() => navigate("/posts/" + post.id)}
                        >
                            <Post key={post.id} post={post} />
                        </div>
                        <hr
                            style={{
                                backgroundColor: "lightgray",
                                height: 1.5,
                                marginTop: "20px",
                                marginBottom: "20px",
                            }}
                        />
                    </>
                ))
            )}
        </div>
    );
};

export default Posts;
