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
    <nav className={` ${Styles.nav } font-anton w-full  text-right`}>
      <Link href="#">Donarss</Link>
      <Link href="#">Stories</Link>
      <Link href="#">News & Event</Link>
      <Link href="#">About Us</Link>
    </nav>
  );
}
