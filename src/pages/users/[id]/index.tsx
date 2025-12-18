import { Button } from "@/components/ui/button";
import UserCard from "@/features/users/components/UserCard";
import { useGetUserDetailsQuery } from "@/features/users/hooks/queries";
import FallBack from "@/pages/fallback";
import { Link, useParams } from "react-router";

const UserDetailsPage = () => {
    const { id } = useParams();
    const { data, isLoading, isFetching } = useGetUserDetailsQuery(+id!);
    if (isFetching || isLoading) return <FallBack> Loading... </FallBack>;
    if (!data) return <FallBack> No User found </FallBack>;

    return (
        <main className="main-container md:max-w-200">
            <div className="flex items-end justify-between">
                <Button
                    variant="link"
                    nativeButton={false}
                    render={<Link to="/users">Back</Link>}
                />
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        nativeButton={false}
                        render={<Link to={`/users/${id}/edit`}>Edit</Link>}
                    />
                    <Button variant="destructive" className="cursor-pointer">
                        Delete
                    </Button>
                </div>
            </div>
            <UserCard {...data} />
        </main>
    );
};

export default UserDetailsPage;
