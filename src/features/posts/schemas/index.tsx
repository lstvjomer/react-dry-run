import { z } from "zod";

export const POST_SCHEMA = z.object({
    title: z.string().nonempty("Title is required"),
    body: z.string().nonempty("Body is required"),
});

export type PostFormData = z.infer<typeof POST_SCHEMA>;
