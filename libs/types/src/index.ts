import { z } from 'zod';

export const AddressSchema = z.object({
  streetName: z.string().min(5),
  city: z.string(),
})

export const UserSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, { message: 'Name must be at least 1 character long' }),
  age: z.number().min(18, { message: 'You must be 18 years old to enter' }),
  address: AddressSchema,
})

export type Address = z.infer<typeof AddressSchema>;
export type User = z.infer<typeof UserSchema>;
