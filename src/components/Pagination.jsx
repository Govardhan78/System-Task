import { usePosts } from "../context/PostContext";

const Pagination = () => {
    const { posts, currentPage, setCurrentPage } = usePosts();

    const postsPerPage = 6;
    const totalPages = Math.ceil(posts.length / postsPerPage);

    return (
        <div>
            <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    style={{
                        margin: "5px",
                        background:
                            currentPage === index + 1 ? "blue" : "white",
                        color:
                            currentPage === index + 1 ? "white" : "black",
                    }}
                >
                    {index + 1}
                </button>
            ))}
            <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                Next
            </button>
        </div>
    )

}
export default Pagination;