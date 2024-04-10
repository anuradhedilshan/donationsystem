import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  img: string;
  link: string;
};

export default function News({ title, img, link }: Props) {
  return (
    <div className=" max-w-[550px] flex flex-col p-5 m-4 rounded-2xl text-primary-dark border-dotted border-gray border">
      <span className="text-xl md:text-4xl font-bold mb-3 text-white"> {title} </span>
      <Image src={img} alt={title} width="600" height="900" />
      <button className="bg-primary-light mt-7 block w-fit px-10 py-1 rounded-xl font-anton text-xl">
        <Link href={link}>Read More</Link>
      </button>
    </div>
  );
}
