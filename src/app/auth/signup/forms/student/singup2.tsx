import Input from '@/components/Input';
import { useFormContext } from 'react-hook-form';
import { studentSchemaType } from './schema';

export default function ParentForm() {
  const { register, formState: { errors } } = useFormContext<studentSchemaType>();

  return (
    <div>
      <h2 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
        Parent/Guardian Details
      </h2>

      <Input
        label="Full Name"
        {...register('parent.fullName')}
        type="text"
        placeholder="Enter parent/guardian full name"
        error={errors.parent?.fullName}
      />

      <Input
        label="Occupation"
        {...register('parent.occupation')}
        type="text"
        placeholder="Enter parent/guardian occupation"
        error={errors.parent?.occupation}
      />

      <Input
        label="NIC No"
        {...register('parent.nicNo')}
        type="text"
        placeholder="Enter parent/guardian NIC number"
        error={errors.parent?.nicNo}
      />

      <Input
        label="Age"
        {...register('parent.age', { setValueAs: (value) => Number(value) })}
        type="number"
        placeholder="Enter parent/guardian age"
        error={errors.parent?.age}
      />

      <Input
        label="Address"
        {...register('parent.address')}
        type="text"
        placeholder="Enter parent/guardian address"
        error={errors.parent?.address}
      />

      <Input
        label="Phone No"
        {...register('parent.phoneNo')}
        type="tel"
        placeholder="Enter parent/guardian phone number"
        error={errors.parent?.phoneNo}
      />

      <Input
        label="Email"
        {...register('parent.email')}
        type="email"
        placeholder="Enter parent/guardian email address"
        error={errors.parent?.email}
      />

      <Input
        label="Monthly Income (LKR)"
        {...register('parent.monthlyIncome', { setValueAs: (value) => Number(value), min: 10000, max: 1000000 })}
        type="number"
        placeholder="Enter parent/guardian monthly income"
        error={errors.parent?.monthlyIncome}
      />

      <Input
        label="Other Income"
        {...register('parent.otherIncome', { setValueAs: (value) => Number(value) })}
        type="number"
        placeholder="Enter parent/guardian other income"
        error={errors.parent?.otherIncome}
      />
    </div>
  );
}
