import { usePosts } from "../context/PostContext";

const Card = ({ post }) => {
    const { posts, setPosts } = usePosts();

    const handleDelete = (id) => {
        const updatedPosts = posts.filter((item) => item.id !== id);
        setPosts(updatedPosts);
    }
    return (
        <>
            <div style={{ display: "flex", margin: "14px", }}>
                <div
                    style={{
                        border: "1px solid #ccc",
                        padding: "15px",
                        marginRight: "11px",
                        borderRadius: "8px",
                        // height: "100px",
                        display: "flex"
                    }}
                >

                    <div style={{}}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>

                    </div>


                </div>
                <button
                    style={{ width: "50px", height: "50px", borderRadius: "50px", marginTop: "40px", color: "red" }}
                    onClick={() => { handleDelete(post.id) }}
                >X</button>

            </div>

        </>

    )
}

export default Card;
