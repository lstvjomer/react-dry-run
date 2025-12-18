import InputField from "@/components/InputField";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router";
import { USER_SCHEMA, type UserFormData } from "@/features/users/schemas";
import { useUpdateUserMutation } from "@/features/users/hooks/mutations";
import { useGetUserDetailsQuery } from "@/features/users/hooks/queries";
import FallBack from "@/pages/fallback";
import { useEffect } from "react";

const EditUserPage = () => {
    const { id } = useParams();
    const { data, isLoading, isFetching } = useGetUserDetailsQuery(+id!);
    const navigate = useNavigate();
    const { mutateAsync } = useUpdateUserMutation(+id!);

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm<UserFormData>({
        resolver: zodResolver(USER_SCHEMA),
        defaultValues: {
            name: "",
            email: "",
        },
    });

    const onSubmit = async (data: UserFormData) => {
        try {
            await mutateAsync(data);
            navigate("/users");
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if ((data && !isLoading) || !isFetching) {
            reset({
                name: data?.name ?? "",
                email: data?.email ?? "",
            });
        }
    }, [data, isFetching, isLoading, reset]);

    if (isFetching || isLoading) return <FallBack> Loading... </FallBack>;
    if (!data) return <FallBack> No posts found </FallBack>;

    return (
        <main className="main-container">
            <Card className="max-w-200 mx-auto">
                <CardHeader>
                    <CardTitle>Write Post</CardTitle>
                </CardHeader>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <CardContent className="space-y-4">
                        <InputField
                            label="Name"
                            {...register("name")}
                            placeholder="Enter Name"
                            error={errors.email?.message}
                        />
                        <InputField
                            label="Email"
                            {...register("email")}
                            placeholder="Enter Email"
                            error={errors.email?.message}
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

export default EditUserPage;
