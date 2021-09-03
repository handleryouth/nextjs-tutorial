import Link from "next/link"
import styles from "../../styles/Ninjas.module.css"

// getStaticProps
/*

runs at build time, as our app is built and our component rendered
this thing runs in the build time so don't write a code that you expect to run in the browser
*/
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // the data will be an array of object
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

export default function Ninjas({ ninjas }) {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
