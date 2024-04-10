import { useEffect } from 'react';
import News from './News';

type Props = {
  title: string;
};

export default function DetailsBox({ title }: Props) {
  return (
    <div className=" p-5 m-4 rounded-2xl text-primary-dark  bg-secondary">
      <span className="text-4xl font-anton mb-3"> {title} </span>
      <div className=' block md:flex flex-wrap gap-2'>
        <News
          title="Community Comes Together to Support Struggling Children in Strilaka"
          img="/singups.jpg"
          link="Text"
        />
         <News
          title="Local Heroes Rally to Aid Families Facing Hardship in Rivertown"
          img="/bg.jpg"
          link="Text"
        />
      </div>
    </div>
  );
}
