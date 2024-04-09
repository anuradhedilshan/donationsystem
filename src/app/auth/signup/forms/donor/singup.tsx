import SelectGroupOne from '@/components/SelectGroup/SelectGroupOne';
import Link from 'next/link';
import { FaEnvelope, FaLocationDot, FaMobile } from 'react-icons/fa6';
import { Gender } from '../formValues';
import Input from '@/components/Input';
import { PlanDonorSchemaType } from './schema';
import { useFormContext } from 'react-hook-form';

export default function Signupform() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PlanDonorSchemaType>();

  return (
    <div className="w-full p-4 sm:p-12.5 xl:p-10.5">
      <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
        Enter Your Personal Details
      </h2>
      {/* <DonateSlider /> */}

      <div className="relative flex justify-between space-x-2">
        <Input
          type="text"
          placeholder="first name"
          label="First Name"
          error={errors['fname']}
          {...register('fname')}
        />
        <Input
          type="text"
          placeholder="last name"
          error={errors['lname']}
          label="Last Name"
          {...register('lname')}
        />
      </div>

      <Input
        label="Emai"
        {...register('email')}
        error={errors['email']}
        type="email"
        placeholder="Enter your email"
        Icon={FaEnvelope}
      />

      <div className="mb-4">
        <SelectGroupOne
          name="gender"
          error={errors['gender']}
          values={Gender}
          label="Gender"
        />
      </div>

      <Input
        type="tel"
        Icon={FaMobile}
        error={errors['tel']}
        {...register('tel')}
        placeholder="Enter Your Mobile Number"
      />

      <div className="mt-6 text-center">
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
