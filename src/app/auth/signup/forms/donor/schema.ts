import { z } from 'zod';

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const Donor_schema = z
  .object({
    fname: z.string().min(3, 'First name is required'),
    lname: z.string().min(2, 'Last name is required'),
    email: z
      .string()
      .email('Invalid email format')
      .min(10, 'Email is required'),
    gender: z
      .string()
      .min(1)
      .refine((value) => value !== '', { message: 'Gender is required' }),
    tel: z.string().min(10, 'Mobile number is required'),
    country: z.string().min(1, 'contry is required'),
    state: z.string().min(1, 'State is required'),
    fulladd: z.string().min(1, 'Full Address is  required'),
    bd: z.string().min(10, 'Birthday not Valid'),
    password: z.string().min(8).max(12),
    confirm: z.string().min(8).max(12),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  });

export type PlanDonorSchemaType = z.infer<typeof Donor_schema>;
export type DonorFieldName = keyof PlanDonorSchemaType;
