import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote", "code"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image"],
        [{ size: [] }],
        [{ font: [] }],
        [{ align: ["right", "center", "justify"] }],
        [{ color: ["red", "#785412"] }],
        [{ background: ["red", "#785412"] }]["clean"],
    ],
};

function Editor({ getPostBody }) {
    const [value, setValue] = useState("");

    useEffect(() => {
        getPostBody(value);
    }, [value]);

    return (
        <div className="h-[500px]">
            <ReactQuill
                style={{ height: "420px", width: "700px" }}
                theme="snow"
                modules={modules}
                value={value}
                onChange={(newValue) => setValue(newValue)}
            />
        </div>
    );
}

export default Editor;
