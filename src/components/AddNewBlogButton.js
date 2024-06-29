import { useState } from "react";
import BlogInputForm from "./BlogInputForm";

export default function AddNewBlogButton({blogList, setBlogList}) {

    function createNewPost() {
        return <BlogInputForm />
    }

    return (
        <button onClick={createNewPost}>Create blog post</button>
    )
}
