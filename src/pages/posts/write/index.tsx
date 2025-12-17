import InputField from "@/components/InputField";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { POST_SCHEMA, type PostFormData } from "@/features/posts/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreatePostMutation } from "@/features/posts/hooks/mutations";
import { useNavigate } from "react-router";

const WritePostPage = () => {
    const navigate = useNavigate();
    const { mutateAsync } = useCreatePostMutation();

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm<PostFormData>({
        resolver: zodResolver(POST_SCHEMA),
        defaultValues: {
            title: "",
            body: "",
        },
    });

    const onSubmit = async (data: PostFormData) => {
        try {
            await mutateAsync(data);
            navigate("/posts");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main className="main-container">
            <Card className="max-w-200 mx-auto">
                <CardHeader>
                    <CardTitle>Write Post</CardTitle>
                </CardHeader>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <CardContent className="space-y-4">
                        <InputField
                            label="Title"
                            {...register("title")}
                            placeholder="Enter Title"
                            error={errors.title?.message}
                        />
                        <InputField
                            label="Body"
                            {...register("body")}
                            placeholder="Enter Body"
                            error={errors.body?.message}
                        />
                    </CardContent>
                    <CardFooter className="flex items-center justify-end gap-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => reset()}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={!isDirty}>
                            Submit
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </main>
    );
};

export default WritePostPage;
