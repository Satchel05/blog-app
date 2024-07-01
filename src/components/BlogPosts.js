export default function BlogPosts({ blogList }) {
    return (
        blogList.map((blog) => {
            return (
                <div>
                    <h4>{blog.title}</h4>
                    <p>{blog.body}</p>
                </div>
            )
        })
    )
}