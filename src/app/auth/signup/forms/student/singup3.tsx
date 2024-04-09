import Link from 'next/link';
import { FaLock } from 'react-icons/fa6';
import CheckboxTwo from '@/components/Checkboxes/CheckboxTwo';
import CustomRadio from '@/components/Radio';
import Input from '@/components/Input';
import { useFormContext } from 'react-hook-form';
import { PlanStudentSchemaType } from './schema';

export default function Signupform3() {
  const {
    register,
    formState: { errors },
  } = useFormContext<PlanStudentSchemaType>();

  return (
    <div className="w-full p-4 sm:p-12.5 xl:p-10.5 min-h-[600px]">
      <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
        Your Password
      </h2>
      {/* <DonateSlider /> */}

      <Input
        {...register('password')}
        error={errors['password']}
        type="password"
        placeholder="Retype Your Password"
        Icon={FaLock}
      />
      <Input
        {...register('confirm')}
        error={errors['confirm']}
        type="password"
        placeholder="Retype Your Password"
        Icon={FaLock}
      />

      {/* <div className="mb-6">
        <CheckboxTwo />
      </div> */}

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
