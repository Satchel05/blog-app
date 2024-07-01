export default function BlogInputForm({ setBlogTitle, setBlogBody}) {

    return (
        <div>
            <label>
                Post Title:
                <input onChange={(e) => { return setBlogTitle(e.target.value); }}></input>
            </label>
            <label>
                Write your blog post:
                {/*Do I need e.target.value when I have useState?*/}
                <textarea onChange={(e) => { return setBlogBody(e.target.value) }} name="postContent" rows={10} cols={50}/>
            </label>
        </div>
    )
}