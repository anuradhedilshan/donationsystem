import { FaGraduationCap, FaSchool } from 'react-icons/fa6';
import SalaryRangeSelector from '@/components/Range/SalaryRangeSelector';
import CustomRadio from '@/components/Radio';
import { EductionFilter } from '../formValues';
import Input from '@/components/Input';
import { useFormContext } from 'react-hook-form';
import { PlanStudentSchemaType } from './schema';
import { ChangeEvent, ChangeEventHandler, memo, useState } from 'react';

function Signupform2() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<PlanStudentSchemaType>();

  const [birthcer, setbirthcer] = useState<string>();
  const [reclett, setreccert] = useState<string>();

  return (
    <div className="w-full p-4 sm:p-12.5 xl:p-10.5 min-h-[600px]">
      {/* <DonateSlider /> */}
      <div className="mb-2">
        <CustomRadio
          error={errors['education']}
          name="education"
          options={EductionFilter}
        />
      </div>

      <Input
        {...register('scl')}
        error={errors['scl']}
        Icon={FaSchool}
        label="School / University"
        name="scl"
        type="text"
        placeholder="Enter your School"
      />

      <Input
        label=" Grade / Level"
        {...register('grade', {
          setValueAs: (v) => Number(v),
        })}
        error={errors['grade']}
        name="grade"
        type="number"
        min={1}
        max={12}
        placeholder="Enter your Grade / Level"
        Icon={FaGraduationCap}
      />
      <Input
        {...register('birthcer', {
          required: 'Recipe picture is required',
        })}
        // value={getValues('birthcer')[0]?.name || ''}
        error={errors['birthcer']}
        label="Upload Your Birth Certificate / ID / Postal ID"
        type="file"
      />

      <Input
        {...register('reclett', {
          required: 'Recipe picture is required',
        })}
        label="Upload recommendation letter from Grama Niladhari or Justice of Peace."
        error={errors['reclett']}
        name="reclett"
        type="file"
      />
      <div className="mt-6 ">
        <SalaryRangeSelector />
      </div>
    </div>
  );
}

export default memo(Signupform2);
