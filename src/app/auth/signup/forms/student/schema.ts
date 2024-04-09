import { z } from 'zod';


interface FileList {
  [Symbol.iterator](): IterableIterator<File>;
}

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const Student_schema = z
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
    education: z.string().min(3, 'education  is required'),
    scl: z.string().min(2, '(School / University) is required'),
    grade: z.number(),
    birthcer: z
      .instanceof(FileList)
      .refine(
        (file) => file[0]?.size <= MAX_UPLOAD_SIZE,
        `Max image size is 5MB.`,
      )
      .refine(
        (file) => ACCEPTED_FILE_TYPES.includes(file[0]?.type),
        'Only .jpg, .jpeg, .png and .webp formats are supported.',
      ),
    reclett: z
      .instanceof(FileList)
      .refine(
        (file) => file[0]?.size <= MAX_UPLOAD_SIZE,
        `Max image size is 5MB.`,
      )
      .refine(
        (file) => ACCEPTED_FILE_TYPES.includes(file[0]?.type),
        'Only .jpg, .jpeg, .png and .webp formats are supported.',
      ),
    salary: z.number(),
    password: z.string().min(8).max(12),
    confirm: z.string().min(8).max(12),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  });

export type PlanStudentSchemaType = z.infer<typeof Student_schema>;
export type StudentFieldName = keyof PlanStudentSchemaType;
