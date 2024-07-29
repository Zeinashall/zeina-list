import Link from "next/link";
import app from "../../app/zeina.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { zeina: data },
  };
};

const Zeina = ({ zeina }) => {
  return (
    <div>
      <h1>All Zeina</h1>
      {zeina.map((zeina) => (
        <Link href={`/zeina/${zeina.id}`} key={zeina.id} className={app.single}>
          <h3>{zeina.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Zeina;
