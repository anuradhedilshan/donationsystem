import SelectGroupOne from '@/components/SelectGroup/SelectGroupOne';
import SelectPlain from '@/components/SelectGroup/SelectPlain';
import Chip from '@/components/chip';
export default function TopBar() {
  return (
    <div className="p-2  flex justify-start space-x-1">
      <Chip label="male"/>
      <Chip label="female" />
      <Chip label='Mahiyanganaya'/>
    </div>
  );
}
