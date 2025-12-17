import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IUser } from "../types";

interface IUserCardProps extends IUser {
    collapsed?: boolean;
}

const UserCard = (props: IUserCardProps) => {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>{props.username}</CardTitle>
            </CardHeader>
            <CardContent>
                {props.collapsed ? (
                    <p> {props.email} </p>
                ) : (
                    <>
                        <p>
                            <b>Name: </b>
                            {props.name}
                        </p>
                        <p>
                            <b>Phone: </b>
                            {props.phone}
                        </p>
                        <p>
                            <b>Email: </b>
                            {props.email}
                        </p>
                        <p>
                            <b>Website: </b>
                            {props.website}
                        </p>
                    </>
                )}
            </CardContent>
        </Card>
    );
};

export default UserCard;
