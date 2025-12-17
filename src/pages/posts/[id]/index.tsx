import { Button } from "@/components/ui/button";
import PostCard from "@/features/posts/components/PostCard";
import { useGetPostDetailsQuery } from "@/features/posts/hooks/queries";
import FallBack from "@/pages/fallback";
import { Link, useParams } from "react-router";

const PostDetailsPage = () => {
    const { id } = useParams();
    const { data, isLoading, isFetching } = useGetPostDetailsQuery(+id!);
    if (isFetching || isLoading) return <FallBack> Loading... </FallBack>;
    if (!data) return <FallBack> No posts found </FallBack>;

    return (
        <main className="main-container md:max-w-200">
            <div className="flex items-end justify-between">
                <Button
                    variant="link"
                    nativeButton={false}
                    render={<Link to="/posts">Back</Link>}
                />
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        nativeButton={false}
                        render={<Link to={`/posts/${id}/edit`}>Edit</Link>}
                    />
                    <Button variant="destructive" className="cursor-pointer">
                        Delete
                    </Button>
                </div>
            </div>
            <PostCard
                body={data.body}
                title={data.title}
                id={data.id}
                userId={data.userId}
            />
        </main>
    );
};

export default PostDetailsPage;
