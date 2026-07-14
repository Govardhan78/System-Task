import Card from "./Card";

const CardList = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <Card
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    )
}
export default CardList;