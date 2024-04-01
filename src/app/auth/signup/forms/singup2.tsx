import SelectGroupOne from '@/components/SelectGroup/SelectGroupOne';
import Link from 'next/link';
import {
  FaEnvelope,
  FaLocationArrow,
  FaLocationDot,
  FaMobile,
} from 'react-icons/fa6';
import { countriesDonationList } from './formValues';

export default function Signupform2() {
  return (
    <div className="w-full p-4 sm:p-12.5 xl:p-10.5">
      <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
        Verify Your Email
      </h2>
      {/* <DonateSlider /> */}
      <form>
        <div className="mb-4">
          <SelectGroupOne values={countriesDonationList} label="Country" />
        </div>

        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            State
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="State"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />

            <span className="absolute right-4 top-4">
              <FaLocationArrow height={22} width={22} />
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Full Address
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />

            <span className="absolute right-4 top-4">
              <FaLocationDot />
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            BirthDay
          </label>
          <div className="relative">
            <input
              type="date"
              placeholder="enter your BirthDay"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
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
