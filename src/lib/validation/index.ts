import * as z from 'zod';

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: 'Too short' })
    .max(50, { message: 'Too long' }),
  username: z
    .string()
    .min(2, { message: 'Too short' })
    .max(50, { message: 'Too long' }),
  email: z
    .string()
    .email()
    .min(2, { message: 'Too short' })
    .max(50, { message: 'Too long' }),
  password: z
    .string()
    .min(8, { message: 'Too short' })
    .max(50, { message: 'Too long' })
});

export const SigninValidation = z.object({
  email: z
    .string()
    .email()
    .min(2, { message: 'Too short' })
    .max(50, { message: 'Too long' }),
  password: z
    .string()
    .min(8, { message: 'Too short' })
    .max(50, { message: 'Too long' })
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(2200),
  tags: z.string()
});
