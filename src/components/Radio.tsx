import {
  PlanStudentSchemaType,
  StudentFieldName,
} from '@/app/auth/signup/forms/student/schema';
import { FieldError, useFormContext } from 'react-hook-form';

type Props = {
  error?: FieldError;
  name: string;
  options: {
    label: string;
    value: string | number;
  }[];
};

export default function CustomRadio({ error, name, options }: Props) {
  const { register } = useFormContext<PlanStudentSchemaType>();
  return (
    <ul
      className={`items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white  ${error ? 'border-red' : 'border-stroke '}`}
    >
      {options.map((e) => (
        <li
          key={e.value}
          className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
        >
          <div className="flex items-center ps-3">
            <input
              {...register(name as StudentFieldName)}
              id="horizontal-list-radio-license"
              type="radio"
              value={e.value}
              name={name}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="horizontal-list-radio-license"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {e.label}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
}
