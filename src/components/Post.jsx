import React from "react";
import TimeAgo from "react-timeago";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import englishStrings from "react-timeago/lib/language-strings/en";

const Post = ({ post }) => {
    const formatter = buildFormatter(englishStrings);

    const { userId, createdAt, title, body } = post;

    return (
        <section className="w-full p-4 rounded-md bg-gray-200">
            <div className="pb-2">
                <h2 className="font-bold text-2xl">{title}</h2>
                <p>
                    <span className="text-[12px]">posted by</span>{" "}
                    <span className="text-gray-400 cursor-pointer">
                        {userId}
                    </span>{" "}
                    <span className="text-gray-400 text-[12px]">
                        posted{" "}
                        {<TimeAgo date={createdAt} formatter={formatter} />}
                    </span>
                </p>
            </div>
            <div
                className="pb-2 leading-relaxed "
                dangerouslySetInnerHTML={{ __html: body.slice(0, 300) + "..." }}
            />
        </section>
    );
};

export default Post;
