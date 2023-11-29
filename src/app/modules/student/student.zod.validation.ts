import { z } from 'zod';

// Define Zod schemas for nested structures
const addressZodValidationSchema = z.object({
  city: z.string(),
  country: z.string(),
});

const userNameZodValidationSchema = z.object({
  firstName: z.string().refine((value) => /^[A-Z][a-z]*$/.test(value)),
  middleName: z.string(),
  lastName: z.string().refine((value) => /^[A-Za-z]+$/.test(value)),
});

const createStudenZodValidationtSchema = z.object({
  body: z.object({
    password: z.string(),
    student: z.object({
      name: userNameZodValidationSchema,
      email: z.string().email(),
      contuctNumber: z.number().max(10),
      dathOfBarth: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),

      gender: z.enum(['male', 'female']),
      address: addressZodValidationSchema,
    }),
  }),
});

export const zodValidations = {
  createStudenZodValidationtSchema,
};
