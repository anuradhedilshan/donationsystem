import Input from '@/components/Input';
import { useFormContext } from 'react-hook-form';
import { studentSchemaType } from './schema';
import SelectGroupOne from '@/components/SelectGroup/SelectGroupOne';
import { BankList } from '../formValues';

export default function BankDetailsForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<studentSchemaType>();

  return (
    <div>
      <h2 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
        Bank Account Details
      </h2>

      <Input
        label="Account Number"
        {...register('bankDetails.accountNumber')}
        type="text"
        placeholder="Enter your bank account number"
        error={errors.bankDetails?.accountNumber}
      />

      <Input
        label="Account Holder Name"
        {...register('bankDetails.accountHolderName')}
        type="text"
        placeholder="Enter account holder name"
        error={errors.bankDetails?.accountHolderName}
      />

      <SelectGroupOne
        values={BankList}
        label="Bank Name"
        {...register('bankDetails.bankName')}
        placeholder="Enter your bank name"
        error={errors.bankDetails?.bankName}
      />

      <Input
        label="Branch"
        {...register('bankDetails.branch')}
        type="text"
        placeholder="Enter your bank branch"
        error={errors.bankDetails?.branch}
      />

      <Input
        label="Relationship"
        {...register('bankDetails.relationship')}
        type="text"
        placeholder="Enter your relationship to the account holder"
        error={errors.bankDetails?.relationship}
      />
    </div>
  );
}
