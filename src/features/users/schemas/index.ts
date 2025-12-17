import { z } from "zod";

export const USER_SCHEMA = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().nonempty("Email is required"),
});

export type UserFormData = z.infer<typeof USER_SCHEMA>;
