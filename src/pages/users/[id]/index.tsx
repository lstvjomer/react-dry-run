import UserCard from "@/features/users/components/UserCard";
import { useGetUserDetailsQuery } from "@/features/users/hooks/queries";
import FallBack from "@/pages/fallback";
import { Link, useParams } from "react-router";

const UserDetailsPage = () => {
    const { id } = useParams();
    const { data, isLoading, isFetching } = useGetUserDetailsQuery(+id!);
    if (isFetching || isLoading) return <FallBack> Loading... </FallBack>;
    if (!data) return <FallBack> No posts found </FallBack>;

    return (
        <main className="main-container md:max-w-200">
            <Link to={"/posts"}>Go Back</Link>
            <UserCard {...data} />
        </main>
    );
};

export default UserDetailsPage;
