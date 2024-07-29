import Link from "next/link";
import "../../app/zeina.css";

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
      <h1>List:</h1>
      {zeina.map((zeina) => (
        <Link href={`/zeina/${zeina.id}`} key={zeina.id} className="single">
          <h3>{zeina.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Zeina;
