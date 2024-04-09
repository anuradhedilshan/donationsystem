import SelectGroupOne from '@/components/SelectGroup/SelectGroupOne';
import Link from 'next/link';
import { FaLocationArrow, FaLocationDot } from 'react-icons/fa6';
import { countriesDonationList } from '../formValues';
import { error } from 'console';
import { useFormContext } from 'react-hook-form';
import { PlanDonorSchemaType } from './schema';
import Input from '@/components/Input';

export default function Signupform1() {
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
      <div className="mb-4">
        <SelectGroupOne
          error={errors['country']}
          name="country"
          values={countriesDonationList}
          label="Country"
        />
      </div>

      <Input
        error={errors['state']}
        {...register('state')}
        label="State"
        name="state"
        type="text"
        placeholder="State"
        Icon={FaLocationArrow}
      />

      <Input
        {...register('fulladd')}
        error={errors['fulladd']}
        Icon={FaLocationDot}
        type="text"
        placeholder="Enter your Full Address"
        label="Full Address"
      />

      <Input
        error={errors['bd']}
        label="Birth Day"
        type="date"
        placeholder="enter your BirthDay"
        {...register('bd')}
        name="bd"
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
