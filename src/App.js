import "./App.css";
import { useState } from "react";
import AddNewBlogButton from "./components/AddNewBlogButton";
import BlogInputForm from "./components/BlogInputForm";
function App() {

  const [blogList, setBlogList] = useState([]);

  return(
      <div className="blogInputsContainer">
        <AddNewBlogButton className="AddNewBlogButton" blogList={blogList} setBlogList={setBlogList}/>
        <BlogInputForm className="BlogInputForm"/>
      </div>
  )
}

export default App;
