import Link from 'next/link';
import { FaLock } from 'react-icons/fa6';
import { useFormContext } from 'react-hook-form';
import { studentSchemaType } from './schema';
import Input from '@/components/Input';
import CheckboxTwo from '@/components/Checkboxes/CheckboxTwo';

export default function Signupform4() {
  const {
    register,
    formState: { errors },
  } = useFormContext<studentSchemaType>();

  return (
    <div className="w-full">
      <h2 className="mb-2 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
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

      <div className="bg-gray p-6 rounded-lg shadow-md mt-3">
        <h2 className="text-title-lg font-semibold mb-4">
          Please read these instructions before creating your account:
        </h2>
        <p className="mb-4">
          Upon account creation, submit a form provided by us, signed by a
          certified signatory, including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>The Principal of the School</li>
          <li>The Principal of the Sunday School</li>
        </ul>
        <p className="mb-4">
          Ensure at least two signatures have the school's rubber stamp.
        </p>
        <p className="mb-4">
          The "<em>Grama Niladhari</em>" should provide their endorsement near
          the text box before account creation.
        </p>
        <p className="font-semibold">Thank you for your cooperation.</p>
      </div>
    </div>
  );
}
