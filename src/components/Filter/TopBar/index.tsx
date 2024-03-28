import SelectGroupOne from '@/components/SelectGroup/SelectGroupOne';
import SelectPlain from '@/components/SelectGroup/SelectPlain';
export default function TopBar() {
  return (
    <div className="p-2  flex justify-around">
      <SelectPlain label="Student Type" />
      <SelectPlain />
      <SelectPlain />
      <SelectPlain />
    </div>
  );
}
