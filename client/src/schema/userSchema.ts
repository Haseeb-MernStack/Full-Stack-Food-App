import {z} from "zod";

export const userSignupSchema = z.object({
    fullName: z.string().min(1,"FullName is required"),
    email:z.string().email("Invalid email address"),
    password: z.string().min(6,"Password must be at least 6 characters long"),
    contact: z.string().min(11,"Contact number must be 11 digit")
});

export type SignupInputState = z.infer<typeof userSignupSchema>;

export const userLoginSchema = z.object({
    email:z.string().email("Invalid email address"),
    password: z.string().min(6,"Password must be at least 6 characters long")
});

export type LoginInputState = z.infer<typeof userLoginSchema>;

