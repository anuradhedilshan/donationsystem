'use client';
import React, { Suspense, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Stepper from './stepper';
import { useSearchParams } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import Loader from '@/components/common/Loader';

const SignUp: React.FC = () => {
  console.log('page render');

  const searchParams = useSearchParams();
  const search = searchParams.get('type');
  const IStudent: boolean = search === 'student';

  let forms: React.JSX.Element[] = [];
  if (IStudent) {
    const Signup1 = dynamic(() =>
      import('./signup/forms/student').then((e) => e.Signupform),
    );
    const Signup2 = dynamic(() =>
      import('./signup/forms/student').then((e) => e.Signupform1),
    );
    const Signup3 = dynamic(() =>
      import('./signup/forms/student').then((e) => e.Signupform2),
    );
    const Signup4 = dynamic(() =>
      import('./signup/forms/student').then((e) => e.Signupform3),
    );
    forms = [
      <Signup1 key={1} />,
      <Signup2 key={2} />,
      <Signup3 key={3} />,
      <Signup4 key={4} />,
    ];
  } else {
    console.log('else');

    const Signup1 = dynamic(() =>
      import('./signup/forms/donor').then((e) => e.Signupform),
    );
    const Signup2 = dynamic(() =>
      import('./signup/forms/donor').then((e) => e.Signupform1),
    );
    const Signup3 = dynamic(() =>
      import('./signup/forms/donor').then((e) => e.Signupform2),
    );

    forms = [<Signup1 key={1} />, <Signup2 key={2} />, <Signup3 key={3} />];
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Sign Up" />
      <div className="flex card flex-wrap items-stretch justify-center shadow-1 rounded-xl">
        <div
          className="hidden w-full xl:block xl:w-1/2 bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(/${IStudent ? 'donor.jpg' : 'signup.jpg'})`,
          }}
        >
          <div className="px-26 py-17.5 text-center flex items-center">
            <p className="2xl:px-20 text-white font-anton text-2xl">
              {IStudent
                ? `Know you're not alone. Your registration is more than a step; it's joining a community building dreams and opportunities. Together, we pave the path to a brighter future, where every student thrives.`
                : `Building a future for children starts with laying a strong foundation of education. Your donation doesn't just construct a building; it constructs opportunities, dreams, and a brighter tomorrow for those who need it most`}
            </p>
          </div>
        </div>
        <div className="w-full border-stroke border dark:border-strokedark xl:w-1/2 xl:border-l-2 h-[800px]">
          <Suspense fallback={<Loader />}>
            <Stepper isStudent={IStudent} forms={forms} />
          </Suspense>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignUp;
