import { usePosts } from "../context/PostContext";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";


const Home = () => {
    const { posts, loading, currentPage } = usePosts();

    const postsPerPage = 6;
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);

    return (

        <div >
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <CardList posts={posts.slice(startIndex, endIndex)} />
                    <Pagination />
                </>


            )}
        </div>
    )

}
export default Home;
