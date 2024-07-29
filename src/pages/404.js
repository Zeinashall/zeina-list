// pages/404.js
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oops..!</h1>
      <h2>That page does not exist</h2>
      <p>
        Go back to <Link href="/">home</Link>
      </p>
    </div>
  );
};

export default NotFound;
