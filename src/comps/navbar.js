import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/call1.png " width={128} height={77} />
        </Link>
      </div>

      <Link href="/About">About</Link>
      <Link href="/zeina">Lists</Link>
    </nav>
  );
};

export default Navbar;
