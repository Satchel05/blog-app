import "./App.css";
import { useState } from "react";
import AddNewBlogButton from "./components/AddNewBlogButton";
import BlogInputForm from "./components/BlogInputForm";
import BlogPosts from "./components/BlogPosts";
function App() {

  const [blogList, setBlogList] = useState([]);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");

  return(
      <div className="blogInputsContainer">
          {/*This prop list is way too long*/}
          <BlogInputForm className="BlogInputForm"
                         setBlogTitle={setBlogTitle}
                         setBlogBody={setBlogBody}/>
          <AddNewBlogButton className="AddNewBlogButton"
                            blogList={blogList}
                            setBlogList={setBlogList}
                            blogTitle={blogTitle}
                            blogBody={blogBody}/>
          <BlogPosts className="BlogPosts"
                     blogList={blogList}/>
      </div>
  )
}

export default App;
