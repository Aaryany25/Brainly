import z from "zod";

export const UserRegistrationSchema =z.object({
    username:z.string().trim().min(3).max(100),
    password:z.string().trim().min(6,"password is Required")
})

export const ContentSchema = z.object({
    title:z.string().min(1,"Title is Required"),
    link:z.string().url("Invalid url"),
    type:z.enum(["X","Y","I"]),
    // userId:z.string().trim().min(1,"user Id is required"),
    tags:z.string().trim().min(1,"tags is Required")
})