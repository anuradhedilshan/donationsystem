/* eslint-disable react/display-name */
import React, { forwardRef, useId } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { IconType } from 'react-icons';
import { FaMobile } from 'react-icons/fa'; // Corrected import statement

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string; // Added label type
  error?: FieldError | undefined | Merge<FieldError, FieldErrorsImpl<any>>;
  Icon?: IconType;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ Icon, label, error, type = 'text', className = '', ...props }, ref) => {
    const id = useId(); // Corrected hook function

    return (
      <div className={`mb-2 ${className}`}>
        {label && ( // Conditionally render label
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type={type}
            id={id}
            ref={ref}
            {...props}
            className={` w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary  ${
              error?.message ? 'border-red' : null
            }`}
          />
          {Icon && (
            <span className="absolute right-4 top-4">
              <Icon />
            </span>
          )}
        </div>
        {error && ( // Conditionally render error message
          <span className="text-red">{(error as FieldError).message}</span>
        )}
      </div>
    );
  },
);

export default Input;
