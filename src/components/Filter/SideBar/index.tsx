import CheckboxFive from '@/components/Checkboxes/CheckboxFive';
import CheckboxTwo from '@/components/Checkboxes/CheckboxTwo';

export default function SideBarFilter() {
  return (
    <div className="p-3 h-full block rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {/* <!-- Checkbox and radio --> */}
      <div >
        <div className=" px-2.5 pt-2 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Type of Student
          </h3>
        </div>
        <div className="flex flex-col gap-2 p-6.5">
          <CheckboxTwo />
          <CheckboxTwo />
          <CheckboxTwo />
          <CheckboxTwo />
        </div>
      </div>
      <div className="">
        <div className=" px-2.5 pt-2 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Type of Student
          </h3>
        </div>
        <div className="flex flex-col gap-2 p-6.5">
          <CheckboxTwo />
          <CheckboxTwo />
          <CheckboxTwo />
          <CheckboxTwo />
        </div>
      </div>
      <div >
        <div className=" px-2.5 pt-2 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Type of Student
          </h3>
        </div>
        <div className="flex flex-col gap-2 p-6.5">
          <CheckboxTwo />
          <CheckboxTwo />
          <CheckboxTwo />
          <CheckboxTwo />
        </div>
      </div>
    </div>
  );
}
