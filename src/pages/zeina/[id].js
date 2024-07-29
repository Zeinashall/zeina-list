import Zeina from ".";

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(zeina => {
      return {
        params: { id: zeina.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { zeina: data }
    }
  }
  

const Details = ({zeina}) => {
    return (
        <div>
        <h1>{zeina.name }</h1>
        <p>{zeina.email }</p>
        <p>{zeina.website }</p>
        <p>{zeina.address.city }</p>
      </div>
    );
  }
  
  export default Details;