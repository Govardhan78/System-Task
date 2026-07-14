import { Children, createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
            console.log(data)

        } catch (error) {
            console.log(error);
        }


    }
    useEffect(() => {
        setTimeout(() => {
            fetchPosts();
            setLoading(false);
        }, 1000)
    }, [])

    return (
        <PostContext.Provider
            value={{
                posts,
                setPosts,
                loading,
                setLoading,
                currentPage,
                setCurrentPage
            }}
        >
            {children}
        </PostContext.Provider>

    )
}

export const usePosts = () => {
    return useContext(PostContext);
}