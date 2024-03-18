import { Varient } from '../varient';

type Props = {
  title: string;
  value: string;
  varient?: Varient;
};

export default function StatusBox({ title, value, varient }: Props) {
  return (
    <div className="block min-w-1/5 flex flex-col justify-center text-center h-56 p-5 m-4 rounded-2xl text-primary-dark  bg-primary-light">
      <span className="text-4xl font-anton mb-3"> {title} </span>
      <h1 className="text-8xl font-anton">{value}</h1>
    </div>
  );
}
