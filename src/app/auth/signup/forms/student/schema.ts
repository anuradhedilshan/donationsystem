import * as z from 'zod';

const studentSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  dateOfBirth: z
    .date()
    .min(
      new Date('1900-01-01'),
      'Date of birth must be on or after January 1, 1900',
    )
    .max(
      new Date(Date.now() - 5 * 365.25 * 24 * 60 * 60 * 1000),
      'Date of birth must be within the last 5 years',
    ),
  gender: z.string(),
  currentAddress: z.string().min(1, 'Current address is required'),
  permanentAddress: z.string().min(1, 'Permanent address is required'),
  email: z.string().email('Invalid email address'),
  schoolName: z.string().min(1, 'School name is required'),
  schoolAddress: z.string().min(1, 'School address is required'),
  grade: z.string().min(1, 'Grade is required'),
  futureAspiration: z.string().min(1, 'Future aspiration is required'),
});

const parentSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  occupation: z.string().min(1, 'Occupation is required'),
  nicNo: z.string().min(9, 'NIC number is required'),
  age: z.number().positive('Age must be a positive number'),
  address: z.string().min(1, 'Address is required'),
  phoneNo: z.string().min(10, 'Phone number is required'),
  email: z.string().email('Invalid email address'),
  monthlyIncome: z
    .number()
    .positive('Monthly income must be a positive number'),
  otherIncome: z.number().positive('Other income must be a positive number'),
});

const bankDetailsSchema = z.object({
  accountHolderName: z.string().min(1, 'Account holder name is required'),
  relationship: z.string().min(1, 'Relationship is required'),
  bankName: z.string().min(1, 'Bank name is required'),
  accountNumber: z.string().min(1, 'Account number is required'),
  branch: z.string().min(1, 'Branch is required'),
});

const recommendationSchema = z.object({
  principalOfSchoolFile: z
    .any()
    .refine(
      (file) => file instanceof File,
      'Principal of school recommendation must be a file',
    ),
  principalOfSundaySchoolFile: z
    .any()
    .refine(
      (file) => file instanceof File,
      'Principal of Sunday school recommendation must be a file',
    ),
  gramaNiladhariFile: z
    .any()
    .refine(
      (file) => file instanceof File,
      'Grama Niladhari recommendation must be a file',
    ),
});

export const studentRegistrationSchema = z.object({
  student: studentSchema,
  parent: parentSchema,
  bankDetails: bankDetailsSchema,
  recommendation: recommendationSchema,
});

export type studentSchemaType = z.infer<typeof studentRegistrationSchema>;
export type StudentFieldName = keyof studentSchemaType;
