export default function BlogInputForm() {
    return (
        <label>
            Write your blog post:
            <textarea name="postContent" rows={8} columns={50}/>
        </label>
    )
}