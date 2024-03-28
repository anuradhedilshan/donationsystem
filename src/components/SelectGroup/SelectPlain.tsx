type Props = {
  label: string;
  values?: {
    lable: string;
    value: string;
  };
};

export default function SelectPlain(props: Props) {
  return (
    <div className="flex flex-col min-w-64">
      <label
        htmlFor="manufacturer"
        className="text-sm font-medium text-stone-600"
      >
        {props.label}
      </label>

      <select
        id="manufacturer"
        className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      >
        <option>Cadberry</option>
        <option>Starbucks</option>
        <option>Hilti</option>
      </select>
    </div>
  );
}
