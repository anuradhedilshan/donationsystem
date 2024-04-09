// Import necessary modules and types
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { PlanStudentSchemaType } from '@/app/auth/signup/forms/student/schema';

// Define and export the component
const SalaryRangeSelector: React.FC = () => {
  // State for salary range
  const [salaryRange, setSalaryRange] = useState<number>(50);

  // Form context
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext<PlanStudentSchemaType>(); // Make sure PlanStudentSchemaType is correctly defined

  // Handle range change
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSalaryRange(Number(event.target.value));
    // setValue('salary',Number(event.target.value));
  };

  return (
    <div>
      <label
        htmlFor="default-range"
        className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${errors['salary'] ? 'text-red' : ''}`}
      >
        Monthly Income range: {salaryRange}K LKR
        <br />
        {errors['salary']?.message}
      </label>
      <input
        {...register('salary', {
          setValueAs: (v) => Number(v),
        })}
        type="range"
        min={0}
        max={100}
        step={10}
        value={salaryRange} // Make sure to assign value to the input
        onChange={handleRangeChange} // Handle range change
        className="w-full h-2 bg-slate-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default SalaryRangeSelector;
