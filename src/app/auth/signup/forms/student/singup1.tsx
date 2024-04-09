import SelectGroupOne from '@/components/SelectGroup/SelectGroupOne';
import Link from 'next/link';
import { FaCalendar, FaLocationDot } from 'react-icons/fa6';
import { SL_State } from '../formValues';
import { useFormContext } from 'react-hook-form';
import { PlanStudentSchemaType } from './schema';
import Input from '@/components/Input';

export default function Signupform1() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<PlanStudentSchemaType>();

  console.log(watch('bd'));
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
          values={[{ name: 'Srilanka', value: 'sl' }]}
          label="Country"
        />
      </div>

      <div className="mb-4">
        <SelectGroupOne
          error={errors['state']}
          name="state"
          values={SL_State}
          label="State"
        />
      </div>

      <Input
        {...register('fulladd')}
        error={errors['fulladd']}
        label="Full Address"
        name="fulladd"
        type="text"
        placeholder="Enter your Full Address "
        Icon={FaLocationDot}
      />

      <Input
        {...register('bd')}
        error={errors['bd']}
        label="Birth Day"
        name="bd"
        type="date"
        placeholder="enter your BirthDay"
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
