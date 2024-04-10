import Link from 'next/link';
import Styles from './styles.module.css';
type Link = {
  label: string;
  path: string | Object;
};

type Props = {
  links?: Link[];
};

export default function NavBar({ links }: Props) {
  return (
    <nav
      className={` ${Styles.nav} md:block flex flex-wrap fix md:text-2xl text-lg md:h-[40px] font-anton w-full  md:text-right`}
    >
      <Link href="#">Donarss</Link>
      <Link href="#">Stories</Link>
      <Link href="#">News</Link>
      <Link href="#">About Us</Link>
      <Link
        href="/auth?type=student"
        className="px-3  rounded-lg bg-primary-light"
      >
        Resgiter As Student
      </Link>
    </nav>
  );
}
