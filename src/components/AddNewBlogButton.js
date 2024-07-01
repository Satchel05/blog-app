import { useState } from "react";
import BlogInputForm from "./BlogInputForm";

// FIXME
export default function AddNewBlogButton({blogList, setBlogList, blogTitle, blogBody}) {

    function updateBlogList() {
        // Insert values for title and body here from state onChange variables
        return setBlogList([...blogList, {title: blogTitle, body: blogBody}])
    }

    return (
        <button onClick={updateBlogList}>Create blog post</button>
    )
}
