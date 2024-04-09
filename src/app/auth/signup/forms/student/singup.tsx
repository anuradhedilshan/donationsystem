import SelectGroupOne from '@/components/SelectGroup/SelectGroupOne';
import Link from 'next/link';
import { FaEnvelope, FaMobile } from 'react-icons/fa6';
import { Gender } from '../formValues';
import { useFormContext } from 'react-hook-form';
import { PlanStudentSchemaType } from './schema';
import Input from '@/components/Input';

export default function Signupform() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PlanStudentSchemaType>();

  return (
    <div className="w-full p-4 sm:p-12.5 xl:p-10.5">
      <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
        Enter Your Personal Details
      </h2>
      {/* <DonateSlider /> */}

      <div className="mb-2">
        <div className="relative flex justify-between space-x-1">
          <Input
            label="First Name"
            {...register('fname')}
            type="text"
            placeholder="first name"
            error={errors['fname']}
          />
          <Input
            label="Last Name"
            {...register('lname')}
            type="text"
            placeholder="last name"
            error={errors['lname']}
          />
        </div>
      </div>

      <Input
        label="Email"
        error={errors['email']}
        Icon={FaEnvelope}
        {...register('email')}
        type="email"
        placeholder="Enter your email"
      />

      <div className="mb-2">
        <SelectGroupOne
          error={errors['gender']}
          name="gender"
          values={Gender}
          label="Gender"
        />
      </div>

      <Input
        label="MobileNumber"
        error={errors['tel']}
        {...register('tel')}
        type="tel"
        placeholder="Enter Your Mobile Number"
        Icon={FaMobile}
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
