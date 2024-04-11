import SelectGroupOne from '@/components/SelectGroup/SelectGroupOne';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa6';
import { Gender } from '../formValues';
import { useFormContext } from 'react-hook-form';
import Input from '@/components/Input';
import { studentSchemaType } from './schema';

export default function Signupform() {
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
        label="Full Name"
        {...register('student.fullName')}
        type="text"
        placeholder="Enter Your Full Name"
        error={errors['student']?.fullName}
      />

      <Input
        label="Date Of Birth"
        type="date"
        error={errors.student?.dateOfBirth}
        {...register('student.dateOfBirth', { valueAsDate: true })}
        placeholder="Enter your BirthDay"
      />

      <div className="mb-2">
        <SelectGroupOne
          {...register('student.gender')}
          error={errors.student?.gender}
          values={Gender}
          label="Gender"
        />
      </div>

      <Input
        label="Current Address"
        error={errors.student?.currentAddress}
        {...register('student.currentAddress')}
        placeholder="Enter Your Current Current Address"
        Icon={FaLocationArrow}
      />

      <Input
        label="Permanent Address"
        error={errors.student?.permanentAddress}
        {...register('student.permanentAddress')}
        placeholder="Enter Your Current  Permanent Address"
        Icon={FaLocationArrow}
      />

      <div className="mt-3 text-center">
        <p>
          Already have an account?{' '}
          <Link href="/auth/signin" className="text-primary">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
