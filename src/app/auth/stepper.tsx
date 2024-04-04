/* eslint-disable react/jsx-no-duplicate-props */
'use client';

type Props = {
  forms: React.ReactElement[];
};

import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import Signupform from './signup/forms/singup';
import Signupform1 from './signup/forms/signup1';
import { useRouter } from 'next/navigation';
import Signupform3 from './signup/forms/singup3';
import Signupform2 from './signup/forms/signup2';

export default function Stepper({ forms }: Props) {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const steps = [];
  for (let i = 0; i < forms.length; i++) {
    steps.push(<Step step={step} stepOrder={i + 1} setStep={setStep} />);
  }
  function nextStep() {
    if (step < forms.length) {
      setStep((lastStep) => lastStep + 1);
    } else {
      router.push('/dashboard');
    }
  }

  function back() {
    if (step > 1) setStep((lastStep) => lastStep - 1);
  }

  return (
    <div className="bg-white p-6 rounded-2xl w-full">
      <div className="flex gap-8 w-full justify-center ">{steps}</div>

      {step >= 1 && step <= forms.length ? forms[step - 1] : null}

      <div className="flex justify-between mt-8">
        <button className="text-gray-700" onClick={back}>
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-primary-light text-white py-2 px-8 rounded-full"
        >
          {step === 3 ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  );
}

function Step({
  step,
  stepOrder,
  setStep,
}: {
  step: number;
  stepOrder: number;
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const status =
    step === stepOrder ? 'active' : step > stepOrder ? 'complete' : 'inactive';

  return (
    <motion.button
      onClick={() => setStep(stepOrder)}
      initial={false}
      animate={status}
      variants={{
        inactive: {
          backgroundColor: '#fff',
        },
        active: {
          backgroundColor: '#333A48',
          borderColor: '#333',
          color: '#fff',
        },
        complete: {
          backgroundColor: '#FDD160',
        },
      }}
      transition={{ duration: 0.5 }}
      className="w-12 h-12 rounded-full border fill-white text-gray-500 grid place-items-center "
    >
      {status === 'complete' ? <CheckIcon /> : <span>{stepOrder}</span>}
    </motion.button>
  );
}

function CheckIcon() {
  return (
    <svg
      className={'text-white h-6 w-6'}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 96 960 960"
      stroke="currentColor"
      strokeWidth={80}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.3,
          type: 'tween',
          ease: 'easeOut',
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z"
      />
    </svg>
  );
}
