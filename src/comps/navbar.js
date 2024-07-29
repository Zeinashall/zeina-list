import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/call.jpg " width={128} height={77} />
      </div>
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/zeina">zeina listing</Link>
    </nav>
  );
};

export default Navbar;
