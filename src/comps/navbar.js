import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/call1.png "  alt="img1" width={80} height={80} />
        </Link>
      </div>
      <div className="lists">
      <Link href="/about" >About</Link>
      <Link href="/zeina">Lists</Link>
      </div>
    </nav>
  );
};

export default Navbar;
