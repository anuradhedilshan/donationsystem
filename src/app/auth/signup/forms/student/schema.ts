import { z } from 'zod';

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

type FileLists = {
  [Symbol.iterator](): IterableIterator<File>;
};
interface H {
  [Symbol.iterator](): IterableIterator<File>;
}
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
      .any()
      .refine((files) => files?.lengh !== 0, 'Document is required.')
      .refine((files) => {
        return files?.[0]?.size <= MAX_UPLOAD_SIZE;
      }, `Max document size is 10MB.`)
      .refine(
        (files) => !ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
        'Only .pdf format is supported.',
      ),
    reclett: z
      .any()
      .refine((files) => files?.lengh !== 0, 'Document is required.')
      .refine((files) => {
        return files?.[0]?.size <= MAX_UPLOAD_SIZE;
      }, `Max document size is 10MB.`)
      .refine(
        (files) => !ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
        'Only .pdf format is supported.',
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
