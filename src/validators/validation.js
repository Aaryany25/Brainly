import z from "zod";

export const UserRegistrationSchema =z.object({
    username:z.string().trim().min(3).max(100),
    password:z.string().trim().min(6,"password is Required")
})
