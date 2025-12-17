import { useGetUserListQuery } from "@/features/users/hooks/queries";
import FallBack from "../fallback";
import { Link } from "react-router";
import UserCard from "@/features/users/components/UserCard";

const UsersPage = () => {
    const { data, isLoading, isFetching } = useGetUserListQuery();
    if (isFetching || isLoading) return <FallBack> Loading... </FallBack>;
    if (!data) return <FallBack> No posts found </FallBack>;

    return (
        <main className="main-container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.map((item) => (
                    <Link key={item.id} to={`/users/${item.id}`}>
                        <UserCard collapsed {...item} />
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default UsersPage;
