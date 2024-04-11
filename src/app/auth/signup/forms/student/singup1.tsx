import {
  FaEnvelope,
  FaGlobe,
  FaGraduationCap,
  FaSchool,
  FaSchoolFlag,
} from 'react-icons/fa6';
import { useFormContext } from 'react-hook-form';
import { studentSchemaType } from './schema';
import Input from '@/components/Input';

export default function Signupform1() {
  const {
    register,
    formState: { errors },
  } = useFormContext<studentSchemaType>();

  return (
    <div className="w-full pt-1">
      <h2 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
        Enter Your Personal Details
      </h2>
      {/* <DonateSlider /> */}

      <Input
        label="Email"
        {...register('student.email')}
        type='email'
        placeholder="Enter your email address"
        Icon={FaEnvelope}
        error={errors['student']?.email}
      />

      <Input
        label="School Name"
        {...register('student.schoolName')}
        type="text"
        placeholder="Enter your school name"
        Icon={FaSchool}
        error={errors['student']?.schoolName}
      />

      <Input
        label="School Address"
        {...register('student.schoolAddress')}
        type="text"
        placeholder=" Enter your school address"
        Icon={FaSchoolFlag}
        error={errors['student']?.schoolAddress}
      />

      <Input
        label="Grade"
        min={1}
        max={13}
        {...register('student.grade')}
        type="number"
        placeholder="Enter your current grade"
        Icon={FaGraduationCap}
        error={errors['student']?.grade}
      />

      <Input
        label="Future Aspiration"
        {...register('student.futureAspiration')}
        type="text"
        placeholder=" Enter your future aspiration"
        Icon={FaGlobe}
        error={errors['student']?.futureAspiration}
      />

    </div>
  );
}
