import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const NotFound = () => {
    return (
        <main className="flex flex-col items-center justify-center space-y-4 min-h-screen py-20">
            <h1 className="text-6xl font-bold"> 404 Error </h1>
            <p> Page might be deleted or doesn't exist </p>
            <Button render={<Link to={"/"}>Go Back</Link>} />
        </main>
    );
};

export default NotFound;
