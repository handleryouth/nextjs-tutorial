import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Velit enim officia aute labore id eu. Do qui adipisicing sunt ex
          aliqua nulla irure eiusmod minim cillum proident. Exercitation sint
          consequat ex excepteur. Commodo exercitation excepteur aute ipsum
          veniam in cillum nulla ut sunt. Pariatur quis officia officia pariatur
          nulla officia. Aliquip ea consequat officia dolore cupidatat
          consectetur eiusmod ipsum labore ea ullamco labore. Velit sunt culpa
          dolore laborum et aliquip tempor ex qui. Occaecat cupidatat dolore
          pariatur id deserunt adipisicing commodo proident cupidatat. Amet
          occaecat officia fugiat non voluptate. Sit ex ad nulla ea labore
          incididunt. In Lorem labore est consectetur fugiat laborum amet irure
          aliquip. Nulla eiusmod Lorem nisi fugiat. Id et eiusmod ut labore
          laborum veniam. Dolor adipisicing ex dolor ipsum sint ipsum excepteur
          consequat. Laborum ipsum ea irure magna ullamco enim quis dolor. Irure
          quis eu nulla commodo ex magna enim. Ut velit ex fugiat mollit
          cupidatat. Aliqua et quis cupidatat consectetur.
        </p>
        <p className={styles.text}>
          Commodo ex dolore irure reprehenderit consequat veniam. Aute nostrud
          consectetur adipisicing do reprehenderit anim. Voluptate qui culpa
          officia exercitation aliquip eu quis laboris esse quis Lorem. Magna
          fugiat laboris incididunt qui adipisicing veniam ea fugiat
          consectetur. Occaecat elit pariatur Lorem duis anim aliqua eiusmod
          commodo in dolor esse irure. Consequat nulla incididunt et deserunt
          amet. Incididunt non est ullamco ipsum nisi excepteur elit et.
          Excepteur eiusmod nisi amet consequat. Voluptate exercitation id
          veniam Lorem ex cupidatat nulla consequat. Ut commodo reprehenderit
          eiusmod magna nostrud elit quis officia ut veniam enim anim commodo
          velit. Sit ut ea et ea nulla eiusmod id.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
