import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IPost } from "../types";

const PostCard = (props: IPost) => {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>
            <CardContent>{props.body}</CardContent>
        </Card>
    );
};

export default PostCard;
