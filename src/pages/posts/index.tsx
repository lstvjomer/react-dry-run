import { useGetPostListQuery } from "@/features/posts/hooks/queries";
import FallBack from "../fallback";
import PostCard from "@/features/posts/components/PostCard";
import { Link } from "react-router";

const PostsPage = () => {
    const { data, isLoading, isFetching } = useGetPostListQuery();
    if (isFetching || isLoading) return <FallBack> Loading... </FallBack>;
    if (!data) return <FallBack> No posts found </FallBack>;

    return (
        <main className="main-container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.map((item) => (
                    <Link key={item.id} to={`/posts/${item.id}`}>
                        <PostCard {...item} />
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default PostsPage;
