import React from "react";
import Header from "../components/Header";
import Post from "../components/Post";

const Profile = () => {
    return (
        <div className="flex justify-evenly items-start pt-40">
            <Header />
            <div className="flex justify-center items-center border shadow p-4 rounded-md">
                <img
                    className="w-[100px] h-[100px] rounded-full m-4"
                    src="https://lh3.googleusercontent.com/a/AAcHTtdXD7R87nil-Bn_KtxRWr6gDFPHp-x7QdRCLT4SyDH_=s96-c"
                    alt=""
                />
                <div className="flex flex-col">
                    <span className="text-2xl">
                        Username: <span className="">skvvskv</span>
                    </span>
                    <span className="text-2xl">
                        Name: <span>Souvik Ghosal</span>
                    </span>
                    <span className="text-2xl">
                        Email: <span>souvik13.12.2000@gmail.com</span>
                    </span>
                </div>
            </div>
            <div className="w-[800px] h-[500px] overflow-y-scroll overflow-x-auto ">
                <div className="fixed bg-black text-white p-2 w-[800px] rounded">
                    <h3 className="text-xl">Posts</h3>
                </div>
                <div className="pt-12 pl-2 pr-2 scroll-smooth gap-2 flex flex-col">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );
};

export default Profile;
