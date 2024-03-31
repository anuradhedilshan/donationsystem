/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import { FaEnvelope, FaLocationDot, FaMobile } from 'react-icons/fa6';

import { Metadata } from 'next';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import DonateSlider from '@/components/DonateSlider';
import Stepper from './stepper';

export const metadata: Metadata = {
  title: 'Next.js SignUp Page | TailAdmin - Next.js Dashboard Template',
  description: 'This is Next.js SignUp Page TailAdmin Dashboard Template',
  // other metadata
};

const SignUp: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Sign Up" />

      <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-stretch justify-center">
          <div
            className="hidden w-full xl:block xl:w-1/2 bg-no-repeat bg-cover "
            style={{ backgroundImage: 'url(/singup.jpg)' }}
          >
            <div className="px-26 py-17.5 text-center flex items-center">
              <p className="2xl:px-20 text-white font-anton text-2xl">
                Building a future for children starts with laying a strong
                foundation of education. Your donation doesn't just construct a
                building; it constructs opportunities, dreams, and a brighter
                tomorrow for those who need it most
              </p>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <Stepper />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignUp;
