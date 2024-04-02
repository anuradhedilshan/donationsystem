import SelectGroupOne from '@/components/SelectGroup/SelectGroupOne';
import Link from 'next/link';
import { FaEnvelope, FaLocationDot, FaLock, FaMobile } from 'react-icons/fa6';
import { Gender } from './formValues';
import CheckboxOne from '@/components/Checkboxes/CheckboxOne';
import CheckboxThree from '@/components/Checkboxes/CheckboxThree';
import CheckboxTwo from '@/components/Checkboxes/CheckboxTwo';

export default function Signupform2() {
  return (
    <div className="w-full p-4 sm:p-12.5 xl:p-10.5 min-h-[600px]">
      <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
        Your Password
      </h2>
      {/* <DonateSlider /> */}
      <form>
        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />

            <span className="absolute right-4 top-4">
              <FaLock height={22} width={22} />
            </span>
          </div>
        </div>
        <div className="mb-6">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Retype Password
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="Retype Your Password"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />

            <span className="absolute right-4 top-4">
              <FaLock />
            </span>
          </div>
        </div>
        <div className="mb-6">
          <CheckboxTwo />
        </div>

        <div className="mt-6 text-center">
          <p>
            Already have an account?{' '}
            <Link href="/auth/signin" className="text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
